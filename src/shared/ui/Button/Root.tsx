import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface RootProps extends ComponentProps<'button'> {
  style?: CSSProperties;
}

const Root = ({ children, style, ...props }: PropsWithChildren<RootProps>) => {
  return (
    <button
      style={{
        backgroundColor: 'white',
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        padding: '5px',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Root;
