import { Button, Modal } from '../../components';
import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './index.style';
import { useModal } from '../../hooks';

const Home = () => {
  const navigate = useNavigate();
  const { isOpen, open } = useModal();

  return (
    <S.Container>
      <Button
        onClick={() => {
          open();
          navigate('/payments');
        }}
      >
        <S.ButtonLabel>열기</S.ButtonLabel>
      </Button>
      <Modal isOpen={isOpen}>
        <Outlet />
      </Modal>
    </S.Container>
  );
};

export default Home;
