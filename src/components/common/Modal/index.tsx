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

interface ModalRootProps {
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalRoot({
  children,
  open,
  onOpenChange,
}: React.PropsWithChildren<ModalRootProps>) {
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
}

function ModalBackdrop() {
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
}

function ModalPositioner({ children }: React.ComponentProps<"div">) {
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div data-scope="modal" data-part="positioner">
      {children}
    </div>
  );
}

function ModalContent({ children }: React.ComponentProps<"div">) {
  const { isOpen } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div data-scope="modal" data-part="content">
      {children}
    </div>
  );
}

function ModalOpener({ children }: React.ComponentProps<"div">) {
  const { setIsOpen } = useContext(ModalContext);

  return <div onClick={() => setIsOpen(true)}>{children}</div>;
}

function ModalCloseer({ children }: React.ComponentProps<"div">) {
  const { setIsOpen } = useContext(ModalContext);

  return <div onClick={() => setIsOpen(false)}>{children}</div>;
}

export {
  ModalRoot as Root,
  ModalBackdrop as Backdrop,
  ModalPositioner as Positioner,
  ModalContent as Content,
  ModalOpener as Opener,
  ModalCloseer as Closer,
};
