interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  isOpen,
  onClose,
}: React.PropsWithChildren<ModalProps>) => {
  const stopModalEventPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-dimmed" onClick={onClose}>
          <div className="modal" onClick={stopModalEventPropagation}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
