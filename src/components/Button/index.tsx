import { PropsWithChildren } from 'react';
import * as S from './index.style';

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  invalid?: boolean;
}

const Button = ({
  onClick,
  type = 'button',
  invalid = false,
  children,
}: ButtonProps) => {
  const handleClickButton = () => {
    onClick && onClick();
  };

  return (
    <S.Button type={type} disabled={invalid} onClick={handleClickButton}>
      {children}
    </S.Button>
  );
};

export default Button;
