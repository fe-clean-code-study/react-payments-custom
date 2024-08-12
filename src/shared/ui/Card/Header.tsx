import { CSSProperties, ComponentProps } from 'react';

export interface HeaderProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Header = ({ children, style, ...props }: HeaderProps) => {
  return (
    <div
      style={{
        padding: '10px',
        fontWeight: 'bold',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Header;
