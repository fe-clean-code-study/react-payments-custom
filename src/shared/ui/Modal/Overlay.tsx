import { useModalContext } from './context';
import * as S from './Modal.style';

const Overlay = () => {
  const { onClose } = useModalContext();

  return <S.Overlay onClick={onClose}></S.Overlay>;
};

export default Overlay;
