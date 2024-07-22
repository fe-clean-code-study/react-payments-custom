import {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  PropsWithChildren,
} from 'react';

interface LabelProps
  extends PropsWithChildren<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  > {}

const Label = ({ children, ...props }: LabelProps) => {
  return <label {...props}>{children}</label>;
};

export default Label;
