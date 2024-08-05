import React, {
  useState,
  forwardRef,
  HTMLAttributes
} from "react";
import ReactDOM from "react-dom";

interface ModalInputProps {
  children: React.ReactNode
  inputProps: HTMLAttributes<HTMLInputElement>
}

const ModalInput = forwardRef(({ children, inputProps }: ModalInputProps, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFocus = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const AppContainer = document.querySelector('.root')

  return (
    <>
      <input
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleCloseModal}
        {...inputProps}
        style={{width:0, height:0, opacity:0}}
      />
      {isModalOpen && (
        ReactDOM.createPortal(
          <div className="modal-dimmed">
            <div className="modal">{children}</div>
          </div>,
          AppContainer
        )
      )}
    </>
  );
});

export default ModalInput;
