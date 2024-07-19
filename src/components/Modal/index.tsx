import { PropsWithChildren } from 'react';
import * as S from './index.style';
import { createPortal } from 'react-dom';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const $rootModal = document.getElementById('root-modal');
  const handleClickBackground = () => {
    onClose && onClose();
  };

  return (
    $rootModal &&
    isOpen &&
    createPortal(
      <S.DeemBackground onClick={handleClickBackground}>
        <S.Modal>{children}</S.Modal>
      </S.DeemBackground>,
      $rootModal,
    )
  );
};

export default Modal;
export { default as ModalHeader } from './ModalHeader';
export { default as ModalBody } from './ModalBody';
export { default as ModalFooter } from './ModalFooter';
