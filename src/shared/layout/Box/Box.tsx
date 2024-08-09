import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface BoxProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Box = ({ style, children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <div style={{ width: '10px', height: '10px', ...style }} {...props}>
      {children}
    </div>
  );
};

export default Box;
