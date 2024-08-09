import { useModalContext } from './context';
import * as S from './Modal.style';

const Overlay = () => {
  const { onClose } = useModalContext();

  return <S.Modal onClick={onClose}></S.Modal>;
};

export default Overlay;
