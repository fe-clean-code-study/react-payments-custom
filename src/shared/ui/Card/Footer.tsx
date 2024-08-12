import { ComponentProps, CSSProperties } from 'react';

export interface FooterProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Footer = ({ children, style, ...props }: FooterProps) => {
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
