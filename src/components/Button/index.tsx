import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  onClick?: (...props: any[]) => void;
  type?: 'keypad' | 'transparent';
  nativeType?: 'button' | 'reset' | 'submit';
  invalid?: boolean;
}

const Button = ({
  onClick,
  type = 'keypad',
  nativeType = 'button',
  invalid = false,
  children,
}: ButtonProps) => {
  const handleClickButton = () => {
    onClick && onClick();
  };

  return (
    <button
      type={nativeType}
      disabled={invalid}
      className='button-box'
      onClick={handleClickButton}
    >
      {children}
    </button>
  );
};

export default Button;
