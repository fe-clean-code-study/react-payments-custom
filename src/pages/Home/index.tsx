import { Outlet, useNavigate } from 'react-router-dom';

import * as S from './index.style';
import { Button, Modal } from '../../components';
import { useModal } from '../../hooks';

const Home = () => {
  const navigate = useNavigate();
  const { isOpen, open } = useModal();

  const handleClickOpenButton = () => {
    open();
    navigate('/payment');
  };

  return (
    <S.Container>
      <Button onClick={handleClickOpenButton}>
        <S.ButtonLabel>열기</S.ButtonLabel>
      </Button>
      <Modal isOpen={isOpen}>
        <S.ContentContainer>
          <Outlet />
        </S.ContentContainer>
      </Modal>
    </S.Container>
  );
};

export default Home;
