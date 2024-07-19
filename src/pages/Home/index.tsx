import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate('/payments');
        }}
      >
        <span className='button-label'>열기</span>
      </Button>
    </div>
  );
};

export default Home;
