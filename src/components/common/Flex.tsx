interface FlexProps {
  direction: "row" | "column";
  align: "start" | "center" | "end";
  justify: "start" | "center" | "end" | "space-between";
  wrap: "wrap" | "nowrap";
  gap: string;
  style: React.CSSProperties;
}

const Flex = ({
  direction,
  align,
  justify,
  wrap,
  gap,
  children,
  style,
  ...props
}: React.PropsWithChildren<
  Partial<FlexProps> & React.HTMLAttributes<HTMLDivElement>
>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
