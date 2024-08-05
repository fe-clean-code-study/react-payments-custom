import { useEffect } from "react";

export const useKeybind = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeybind = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeybind);
    return () => {
      window.removeEventListener("keydown", handleKeybind);
    };
  }, []);
};
