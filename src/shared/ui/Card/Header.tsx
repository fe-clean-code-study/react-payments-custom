import { CSSProperties, ComponentProps, PropsWithChildren } from 'react';

export interface HeaderProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Header = ({
  children,
  style,
  ...props
}: PropsWithChildren<HeaderProps>) => {
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
