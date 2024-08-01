import { useState, useCallback } from "react";

const useBlur = (initialState = false) => {
  const [blurred, setBlurred] = useState(initialState);

  const handleBlur = useCallback(() => {
    setBlurred(true);
  }, []);

  const resetBlur = useCallback(() => {
    setBlurred(false);
  }, []);

  return { blurred, handleBlur, resetBlur };
};

export default useBlur;
