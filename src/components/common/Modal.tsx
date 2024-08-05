import { PropsWithChildren, useState, createContext, useContext } from "react";
import { useClickOutside } from "../../hooks/common/useClickOutside";
import { useKeybind } from "../../hooks/common/useKeybind";
import { Portal } from "./Portal";

interface ModalProps {
  onShow: () => void;
  onHide: () => void;
}

interface ModalContextType {
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const Modal = ({
  onShow,
  onHide,
  children,
}: PropsWithChildren<ModalProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    if (isOpen) {
      onHide();
    } else {
      onShow();
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Trigger = ({ children }: PropsWithChildren) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Trigger must be used within a Modal");

  return <div onClick={context.toggleModal}>{children}</div>;
};

Modal.Content = ({ children }: PropsWithChildren) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal.Content must be used within a Modal");

  const { isOpen, toggleModal } = context;

  const ref = useClickOutside<HTMLDivElement>(toggleModal);
  useKeybind("Escape", toggleModal);

  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal-dimmed">
            <div className="modal" ref={ref}>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
