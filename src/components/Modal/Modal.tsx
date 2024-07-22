import { MouseEvent, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
}

const Modal = ({ children, showModal, onClose }: ModalProps) => {
  const modalLayoutRef = useRef<HTMLDivElement>(null);

  const handleClickModalLayout = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.currentTarget === e.target && onClose();
    },
    [onClose]
  );

  return (
    showModal &&
    createPortal(
      <ModalLayout ref={modalLayoutRef} onClick={handleClickModalLayout}>
        {children}
      </ModalLayout>,
      document.body
    )
  );
};

const ModalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
