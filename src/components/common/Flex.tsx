import { CSSProperties, PropsWithChildren } from "react";
import { useResponsiveValue } from "../../hooks/common/useResponsiveValue";
import { ResponsiveValue } from "../../utils/responsive";

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
  style,
}: PropsWithChildren<FlexProps>) => {
  const flexStyle: CSSProperties = {
    display: "flex",
    flexDirection: useResponsiveValue(direction, "row"),
    justifyContent: useResponsiveValue(justify, "flex-start"),
    alignItems: useResponsiveValue(align, "stretch"),
    flexWrap: useResponsiveValue(wrap, "nowrap"),
    gap: useResponsiveValue(gap, 0),
    ...(typeof style === "object" && !("mobile" in style) ? style : {}),
  };

  return <div style={flexStyle}>{children}</div>;
};
