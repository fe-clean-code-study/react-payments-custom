import { isObject } from "./isObject";
import { BreakpointAlias } from "../constants/breakpoint";

type ResponsiveValueConfig<T = string> = {
  [Breakpoint in BreakpointAlias]?: T;
};

export type ResponsiveValue<T> = T | ResponsiveValueConfig<T>;

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

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
    .getPropertyValue("--current-breakpoint")
    .trim() as BreakpointAlias;
};

export const createResponsiveStyle = <T extends string | number>(
  property: string,
  value: ResponsiveValue<T>
): string => {
  if (!isResponsiveValueConfig(value)) {
    return `${property}: ${value};`;
  }

  const breakpointEntries = Object.entries(breakpoints) as [
    BreakpointAlias,
    number
  ][];
  return breakpointEntries.reduce((acc, [breakpoint, minWidth], index) => {
    if (value[breakpoint] !== undefined) {
      if (index === 0) {
        acc += `${property}: ${value[breakpoint]};`;
      } else {
        acc += `@media (min-width: ${minWidth}px) { ${property}: ${value[breakpoint]}; }`;
      }
    }
    return acc;
  }, "");
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
