import { useNavigate } from 'react-router-dom';

import * as S from './Haeder.style';

import { GoogleIcon } from '~/shared/ui';

const Root = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/card-list');
  };

  return (
    <S.Container>
      <S.IconContainer onClick={handleClickBack}>
        <GoogleIcon name='arrowBack' />
      </S.IconContainer>
      <div>카드 등록</div>
    </S.Container>
  );
};

export default Root;
