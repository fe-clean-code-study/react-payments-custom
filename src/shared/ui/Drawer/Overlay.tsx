import { useDrawerContext } from './context';
import * as S from './Drawer.style';

const Overlay = () => {
  const { close, isOpen } = useDrawerContext();

  return isOpen && <S.Overlay onClick={close}></S.Overlay>;
};

export default Overlay;
