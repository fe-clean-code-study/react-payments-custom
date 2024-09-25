import { useModalContext } from './context';
import * as S from './Modal.style';

const Overlay = () => {
  const { close, isOpen, closeDisabled } = useModalContext();

  const handleClickOverlay = () => {
    closeDisabled || close();
  };

  return isOpen && <S.Overlay onClick={handleClickOverlay}></S.Overlay>;
};

export default Overlay;
