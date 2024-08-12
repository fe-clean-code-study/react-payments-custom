import { useDrawerContext } from './context';
import * as S from './Drawer.style';

const Overlay = () => {
  const { onClose } = useDrawerContext();

  return <S.Overlay onClick={onClose}></S.Overlay>;
};

export default Overlay;
