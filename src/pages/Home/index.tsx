import { Outlet, useNavigate } from 'react-router-dom';

import * as S from './index.style';

import { Button, Card, DeemBackground } from '~/components';
import { useModal } from '~/hooks';

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
          <Card>
            <S.ContentContainer>
              <Outlet />
            </S.ContentContainer>
          </Card>
        </DeemBackground>
      )}
    </S.Container>
  );
};

export default Home;
