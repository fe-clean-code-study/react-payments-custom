import { Style } from "../../../types";

export interface FlexProps extends React.ComponentProps<"div"> {
  direction: "row" | "column";
  justify: "start" | "center" | "end" | "space-between";
  align: "start" | "center" | "end";
  wrap: "wrap" | "nowrap";
  gap: Style.Length;
  width: Style.Length;
  height: Style.Length;
  position: Style.Position;
  top: Style.Length;
  right: Style.Length;
  bottom: Style.Length;
  left: Style.Length;
  borderRadius: Style.BorderRadius;
  backgroundColor: Style.Color;
  zIndex: number;
}

const Flex = ({
  direction,
  justify,
  align,
  wrap,
  gap,
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  borderRadius,
  backgroundColor,
  zIndex,
  children,
  style,
  ...props
}: Partial<FlexProps>) => {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,
    width,
    height,
    position,
    top,
    right,
    bottom,
    left,
    borderRadius,
    backgroundColor,
    zIndex,
  };

  return (
    <div style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
};

export default Flex;
