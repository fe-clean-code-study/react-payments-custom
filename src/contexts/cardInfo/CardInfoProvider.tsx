import { useMemo, useReducer } from "react";
import CardInfoContext from "./CardInfoContext";
import cardInfoReducer from "./cardInfoReducer";

const CardInfoProvider = ({ children }: React.PropsWithChildren) => {
  const [cardInfoList, dispatch] = useReducer(cardInfoReducer, []);

  const cardInfoContextValue = useMemo(
    () => ({ cardInfoList, dispatch }),
    [cardInfoList, dispatch]
  );

  return (
    <CardInfoContext.Provider value={cardInfoContextValue}>
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
