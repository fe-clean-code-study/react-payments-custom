import { PropsWithChildren } from 'react';

import * as S from './index.style';

export interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const Button = ({
  onClick,
  type = 'button',
  disabled = false,
  children,
}: ButtonProps) => {
  const handleClickButton = () => {
    onClick && onClick();
  };

  return (
    <S.Button type={type} disabled={disabled} onClick={handleClickButton}>
      {children}
    </S.Button>
  );
};

export default Button;
