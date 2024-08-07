import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface LabelProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Label = ({
  children,
  style,
  ...props
}: PropsWithChildren<LabelProps>) => {
  return (
    <div style={{ width: '100%', ...style }} {...props}>
      {children}
    </div>
  );
};

export default Label;
