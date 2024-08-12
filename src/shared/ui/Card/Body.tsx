import { ComponentProps, CSSProperties } from 'react';

export interface BodyProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Body = ({ children, style, ...props }: BodyProps) => {
  return (
    <div style={{ padding: '10px', ...style }} {...props}>
      {children}
    </div>
  );
};

export default Body;
