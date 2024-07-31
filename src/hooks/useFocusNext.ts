import { useRef } from "react";

const useFocusNext = (order: string[]) => {
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const register = (element: HTMLInputElement | null) => {
    const elementName = element?.name;
    if (elementName) {
      inputRefs.current[elementName] = element;
    }
  };

  const focusNext = (
    element: HTMLInputElement | null,
    shouldMoveFocus: (value: string | undefined) => boolean
  ) => {
    const currentIndex = order.findIndex((name) => element?.name === name);
    const nextIndex = currentIndex + 1;

    if (shouldMoveFocus(element?.value) && nextIndex < order.length) {
      const nextName = order[nextIndex];
      inputRefs.current[nextName]?.focus();
    }
  };

  return { register, focusNext };
};

export default useFocusNext;
