import { ComponentProps, CSSProperties, PropsWithChildren } from 'react';

export interface FooterProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Footer = ({
  children,
  style,
  ...props
}: PropsWithChildren<FooterProps>) => {
  return (
    <div
      style={{
        padding: '10px',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Footer;
