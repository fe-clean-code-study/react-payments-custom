import React, { forwardRef, HTMLAttributes, useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalInputProps {
  children: React.ReactNode
  inputProps: HTMLAttributes<HTMLInputElement>
}

const ModalInput = forwardRef<HTMLInputElement, ModalInputProps>(
  ({ children, inputProps }, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleFocus = () => {
      setIsModalOpen(true)
    }
    const handleCloseModal = () => {
      setIsModalOpen(false)
    }

    const AppContainer = document.querySelector('.root')

    return (
      <>
        <input
          ref={ref}
          onFocus={handleFocus}
          // onBlur={handleCloseModal} TODO : 외부 클릭할때로 변경
          {...inputProps}
          style={{ width: 0, height: 0, opacity: 0 }}
        />
        {isModalOpen &&
          ReactDOM.createPortal(
            <div className='modal-dimmed'>
              <div className='modal'>{children}</div>
            </div>,
            AppContainer!,
          )}
      </>
    )
  },
)

export default ModalInput
