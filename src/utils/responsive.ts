import { style } from "@vanilla-extract/css";
import { isObject } from "./isObject";
import { BreakpointAlias } from "../constants/breakpoint";
import { vars } from "../styles/breakpointTheme.css";

type ResponsiveValueConfig<T = string> = {
  [Breakpoint in BreakpointAlias]?: T;
};

export type ResponsiveValue<T> = T | ResponsiveValueConfig<T>;

const isResponsiveValueConfig = <T>(
  value: unknown
): value is ResponsiveValueConfig<T> => {
  return (
    isObject(value) &&
    ("mobile" in value || "tablet" in value || "desktop" in value)
  );
};

export const getCurrentBreakpoint = (): BreakpointAlias => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--currentBreakpoint")
    .trim() as BreakpointAlias;
};

export const createResponsiveStyle = <T extends string | number>(
  property: string,
  value: ResponsiveValue<T>
) => {
  if (!isResponsiveValueConfig(value)) {
    return style({ [property]: value });
  }

  return style({
    [property]: value.mobile,
    "@media": {
      [`(min-width: ${vars.breakpoints.tablet})`]: {
        [property]: value.tablet,
      },
      [`(min-width: ${vars.breakpoints.desktop})`]: {
        [property]: value.desktop,
      },
    },
  });
};

export const getResponsiveValue = <T>(
  value: ResponsiveValue<T>,
  defaultValue: T
): T => {
  if (!isResponsiveValueConfig(value)) {
    return value;
  }

  const currentBreakpoint = getCurrentBreakpoint();
  return value[currentBreakpoint] ?? defaultValue;
};
