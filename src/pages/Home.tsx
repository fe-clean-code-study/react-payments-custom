import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        label='열기'
        onClick={() => {
          navigate('/payments');
        }}
      />
    </div>
  );
};

export default Home;
