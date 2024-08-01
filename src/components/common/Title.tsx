interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
}

const Title = ({
  level,
  className,
  style,
  children,
}: React.PropsWithChildren<TitleProps>) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Title;
