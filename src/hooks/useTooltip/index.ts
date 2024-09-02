import { useState, useCallback } from "react";

const useTooltip = (initialState: boolean = false) => {
  const [isShow, setIsShow] = useState(initialState);

  const show = useCallback(() => {
    setIsShow(true);
  }, []);

  const hide = useCallback(() => {
    setIsShow(false);
  }, []);

  return {
    isShow,
    show,
    hide,
  };
};

export default useTooltip;
