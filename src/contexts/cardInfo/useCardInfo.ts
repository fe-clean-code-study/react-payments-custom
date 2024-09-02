import { useContext } from "react";
import CardInfoContext from "./CardInfoContext";

const useCardInfo = () => {
  const context = useContext(CardInfoContext);

  return context;
};

export default useCardInfo;
