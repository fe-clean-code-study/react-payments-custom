import { useNavigate } from 'react-router-dom';

import { GoogleIcon } from '~/shared/ui';

const Header = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/card-list');
  };

  return (
    <div>
      <div onClick={handleClickBack}>
        <GoogleIcon name='arrowBack' />
      </div>
      <div>카드 등록</div>
    </div>
  );
};

export default Header;
