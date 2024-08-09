import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style, children, ...props }: PropsWithChildren<RootProps>) => {
  return (
    <div style={{ width: '10px', height: '10px', ...style }} {...props}>
      {children}
    </div>
  );
};

export default Root;
