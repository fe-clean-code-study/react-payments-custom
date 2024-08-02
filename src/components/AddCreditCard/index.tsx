import { PropsWithChildren } from 'react';

import * as S from './index.style';
import GoogleIcon from '../GoogleIcon';

export interface AddCreditCardProps extends PropsWithChildren {
  onClick?: () => void;
}

const AddCreditCard = ({ onClick }: AddCreditCardProps) => {
  const handleClickCard = () => {
    onClick && onClick();
  };

  return (
    <S.Container>
      <S.CreditCard onClick={handleClickCard}>
        <GoogleIcon name='add' />
      </S.CreditCard>
    </S.Container>
  );
};

export default AddCreditCard;
