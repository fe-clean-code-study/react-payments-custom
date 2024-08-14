import { useNavigate } from 'react-router-dom';

import { AddCard } from '~/features/ManageCard/ui';

const Root = () => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate('/card-regist');
  };

  return <AddCard size={'small'} onClick={handleClickCard} />;
};

export default Root;
