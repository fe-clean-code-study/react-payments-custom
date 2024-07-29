import { isObject } from "./isObject";

type BreakpointsAlias = "mobile" | "tablet" | "desktop";

type ResponsiveValueConfig<T = string> = {
  [Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveValue<T> = T | ResponsiveValueConfig<T>;

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

const getViewportWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

const getCurrentBreakpoint = (): BreakpointsAlias => {
  const width = getViewportWidth();
  if (width >= breakpoints.desktop) return "desktop";
  if (width >= breakpoints.tablet) return "tablet";
  return "mobile";
};

const isResponsiveValueConfig = <T>(
  value: unknown
): value is ResponsiveValueConfig<T> => {
  return (
    isObject(value) &&
    ("mobile" in value || "tablet" in value || "desktop" in value)
  );
};

const getResponsiveValue = <T>(
  value: ResponsiveValue<T>,
  defaultValue: T
): T => {
  if (!isResponsiveValueConfig(value)) {
    return value;
  }

  const currentBreakpoint = getCurrentBreakpoint();
  const breakpointsOrder: BreakpointsAlias[] = ["desktop", "tablet", "mobile"];

  const selectedBreakpoint = breakpointsOrder.find(
    (bp) =>
      value[bp] !== undefined &&
      breakpoints[bp] <= breakpoints[currentBreakpoint]
  );

  if (selectedBreakpoint) {
    return value[selectedBreakpoint]!;
  }
  return defaultValue;
};

export { getResponsiveValue };
