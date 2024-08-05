import { useState, useEffect, useCallback } from "react";
import { ResponsiveValue, getResponsiveValue } from "../../utils/responsive";
import { debounce } from "../../utils/debounce";

export function useResponsiveValue<T>(
  value: ResponsiveValue<T>,
  defaultValue: T
): T {
  const [currentValue, setCurrentValue] = useState(() =>
    getResponsiveValue(value, defaultValue)
  );

  const handleResize = useCallback(
    debounce(() => {
      const newValue = getResponsiveValue(value, defaultValue);
      setCurrentValue(newValue);
    }, 100),
    [value, defaultValue]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return currentValue;
}
