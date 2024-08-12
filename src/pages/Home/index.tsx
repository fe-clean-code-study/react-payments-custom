import { Outlet, useNavigate } from 'react-router-dom';

import * as S from './index.style';

import { Button, DeemBackground } from '~/components';
import { useModal } from '~/shared/hooks';

const Home = () => {
  const navigate = useNavigate();
  const { isOpen, open } = useModal(false);

  const handleClickOpenButton = () => {
    open();
    navigate('/payment');
  };

  return (
    <S.Container>
      <Button onClick={handleClickOpenButton}>
        <S.ButtonLabel>열기</S.ButtonLabel>
      </Button>
      {isOpen && (
        <DeemBackground>
          <S.ContentContainer>
            <S.Modal>
              <Outlet />
            </S.Modal>
          </S.ContentContainer>
        </DeemBackground>
      )}
    </S.Container>
  );
};

export default Home;
