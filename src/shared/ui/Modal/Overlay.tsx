import { useModalContext } from './context';
import * as S from './Modal.style';

const Overlay = () => {
  const { close, isOpen } = useModalContext();

  return isOpen && <S.Overlay onClick={close}></S.Overlay>;
};

export default Overlay;
