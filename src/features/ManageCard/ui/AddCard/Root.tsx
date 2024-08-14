import * as S from './AddCard.style';

import { CreditCardProps } from '~/entities/Card/ui/CreditCard';
import { GoogleIcon } from '~/shared/ui';

export interface RootProps extends Pick<CreditCardProps, 'size'> {
  onClick: () => void;
}

const Root = ({ onClick, size = 'small' }: RootProps) => {
  return (
    <S.AddCard onClick={onClick} size={size}>
      <GoogleIcon name='add' />
    </S.AddCard>
  );
};

export default Root;
