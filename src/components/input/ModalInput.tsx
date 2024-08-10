import { forwardRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useOutsideClick from '../../hooks/useOutsideClick.ts'
import { SlotComponentProps } from '../../types/componentTypes.ts'

const ModalInput = forwardRef<
  HTMLInputElement,
  SlotComponentProps<HTMLInputElement>
>(({ children, ...inputProps }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFocus = () => {
    setIsModalOpen(true)
  }

  const insideRef = useOutsideClick<HTMLDivElement>(() => {
    setIsModalOpen(false)
  })

  const AppContainer = document.querySelector('.root')

  return (
    <>
      <input
        ref={ref}
        onFocus={handleFocus}
        {...inputProps}
        style={{ width: 0, height: 0, opacity: 0 }}
      />
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className='modal-dimmed'>
            <div className='modal' ref={insideRef}>
              {children}
            </div>
          </div>,
          AppContainer!,
        )}
    </>
  )
})

export default ModalInput
