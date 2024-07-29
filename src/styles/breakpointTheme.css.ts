import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { breakpoints } from "../constants/breakpoint";

export const vars = createGlobalTheme(":root", {
  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    desktop: `${breakpoints.desktop}px`,
  },
  currentBreakpoint: "mobile",
});

globalStyle(":root", {
  vars: {
    [vars.currentBreakpoint]: "mobile",
  },
  "@media": {
    [`(min-width: ${vars.breakpoints.tablet})`]: {
      vars: {
        [vars.currentBreakpoint]: "tablet",
      },
    },
    [`(min-width: ${vars.breakpoints.desktop})`]: {
      vars: {
        [vars.currentBreakpoint]: "desktop",
      },
    },
  },
});
