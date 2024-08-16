import { ComponentProps, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Header.style';

import { GoogleIcon, Modal } from '~/shared/ui';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style }: RootProps) => {
  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate('/');
  };

  return (
    <Modal.Header style={style}>
      <S.IconContainer onClick={handleClickIcon}>
        <GoogleIcon name='arrowBack' />
      </S.IconContainer>
      <div>
        <div>카드 추가</div>
      </div>
    </Modal.Header>
  );
};

export default Root;
