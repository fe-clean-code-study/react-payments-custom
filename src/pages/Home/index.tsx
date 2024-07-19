import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Button
        onClick={() => {
          navigate('/payments');
        }}
      >
        <S.ButtonLabel>열기</S.ButtonLabel>
      </Button>
    </S.Container>
  );
};

export default Home;
