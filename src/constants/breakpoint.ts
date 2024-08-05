export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
} as const;

export type BreakpointAlias = keyof typeof breakpoints;
