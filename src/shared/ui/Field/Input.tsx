import { ComponentProps, CSSProperties } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  style?: CSSProperties;
}

const Input = ({ style, ...props }: InputProps) => {
  return (
    <input
      style={{
        padding: '10px',
        borderRadius: '5px',
        outline: 'none',
        border: '1px solid #eee',
        ...style,
      }}
      {...props}
    />
  );
};

export default Input;
