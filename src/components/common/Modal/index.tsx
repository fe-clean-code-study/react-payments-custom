import { createContext, useContext, useMemo, useState } from "react";
import "./style.css";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export interface ModalRootProps {
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoot = ({
  children,
  open,
  onOpenChange,
}: React.PropsWithChildren<ModalRootProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalContextValue = useMemo(() => {
    if (open && onOpenChange) {
      return {
        isOpen: open,
        setIsOpen: onOpenChange,
      };
    } else {
      return { isOpen, setIsOpen };
    }
  }, [isOpen, onOpenChange, open]);

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalBackdrop = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      data-scope="modal"
      data-part="backdrop"
      onClick={() => setIsOpen(false)}
    />
  );
};

const ModalPositioner = ({ children }: React.PropsWithChildren) => {
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div data-scope="modal" data-part="positioner">
      {children}
    </div>
  );
};

const ModalContent = ({ children }: React.PropsWithChildren) => {
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div data-scope="modal" data-part="content">
      {children}
    </div>
  );
};

const ModalOpener = ({ children }: React.PropsWithChildren) => {
  const { setIsOpen } = useContext(ModalContext);

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
};

const ModalCloseer = ({ children }: React.PropsWithChildren) => {
  const { setIsOpen } = useContext(ModalContext);

  return <div onClick={() => setIsOpen(false)}>{children}</div>;
};

export {
  ModalRoot as Root,
  ModalBackdrop as Backdrop,
  ModalPositioner as Positioner,
  ModalContent as Content,
  ModalOpener as Opener,
  ModalCloseer as Closer,
};
