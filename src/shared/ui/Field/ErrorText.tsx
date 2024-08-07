import { ComponentProps, CSSProperties } from 'react';

export interface ErrorTextProps extends ComponentProps<'p'> {
  style?: CSSProperties;
}

const ErrorText = ({ style, ...props }: ErrorTextProps) => {
  return (
    <p
      style={{
        color: 'red',
        ...style,
      }}
      {...props}
    />
  );
};

export default ErrorText;
