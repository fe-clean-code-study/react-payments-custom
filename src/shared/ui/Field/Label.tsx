import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface LabelProps extends ComponentProps<'label'> {
  style?: CSSProperties;
}

const Label = ({
  children,
  style,
  ...props
}: PropsWithChildren<LabelProps>) => {
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
