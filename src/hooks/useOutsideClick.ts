import { useEffect, useRef } from 'react'

const useOutsideClick = <T extends HTMLElement>(
  onClickOutside: VoidFunction,
) => {
  const targetRef = useRef<T | null>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const targetElement = targetRef.current
      if (targetElement && targetElement.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [onClickOutside])

  return targetRef
}

export default useOutsideClick
