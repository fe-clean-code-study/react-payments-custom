import { CSSProperties, PropsWithChildren } from "react";
import { ResponsiveValue } from "../../utils/responsive";
import { createFlexStyle } from "./Flex.css";

export interface FlexProps {
  direction?: ResponsiveValue<"row" | "column">;
  justify?: ResponsiveValue<
    "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
  >;
  align?: ResponsiveValue<
    "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
  >;
  wrap?: ResponsiveValue<"nowrap" | "wrap" | "wrap-reverse">;
  gap?: ResponsiveValue<number | string>;
  style?: ResponsiveValue<CSSProperties>;
}

export const Flex = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap = 0,
}: PropsWithChildren<FlexProps>) => {
  const flexStyle = createFlexStyle({
    direction,
    justify,
    align,
    wrap,
    gap,
  });

  return <div className={flexStyle}>{children}</div>;
};
