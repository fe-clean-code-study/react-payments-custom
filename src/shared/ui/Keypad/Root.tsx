import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
  row?: number;
  col?: number;
}

const Root = ({
  style,
  row,
  col,
  children,
  ...props
}: PropsWithChildren<RootProps>) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Root;
