import { ComponentProps, CSSProperties } from 'react';

export interface LabelProps extends ComponentProps<'label'> {
  style?: CSSProperties;
}

const Label = ({ children, style, ...props }: LabelProps) => {
  return (
    <label
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
