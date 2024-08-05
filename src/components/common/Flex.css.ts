import { style } from "@vanilla-extract/css";
import { createResponsiveStyle } from "../../utils/responsive";
import { FlexProps } from "./Flex";

export const flexBase = style({
  display: "flex",
});

export const createFlexStyle = ({
  direction,
  justify,
  align,
  wrap,
  gap,
}: FlexProps) => {
  return style([
    flexBase,
    createResponsiveStyle("flexDirection", direction || "row"),
    createResponsiveStyle("justifyContent", justify || "flex-start"),
    createResponsiveStyle("alignItems", align || "stretch"),
    createResponsiveStyle("flexWrap", wrap || "nowrap"),
    createResponsiveStyle("gap", gap || 0),
  ]);
};
