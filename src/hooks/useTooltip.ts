import { useState, useCallback } from "react";

const useTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const showTooltipHandler = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const hideTooltipHandler = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return {
    showTooltip,
    showTooltipHandler,
    hideTooltipHandler,
  };
};

export default useTooltip;
