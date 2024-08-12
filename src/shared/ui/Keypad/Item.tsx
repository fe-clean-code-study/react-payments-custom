import { ComponentProps, CSSProperties } from 'react';

export interface ItemProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Item = ({ style, children, ...props }: ItemProps) => {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Item;
