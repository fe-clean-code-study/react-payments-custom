import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ children, style, ...props }: PropsWithChildren<RootProps>) => {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '7px',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Root;
