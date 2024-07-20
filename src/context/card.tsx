import { createContext, useMemo, useReducer } from "react";
import { CardInfo } from "../types";
import { getRandomId } from "../utils";

interface CardInfoContextType {
  cardInfoList: CardInfo[];
  dispatch: React.Dispatch<Action>;
}

export const CardInfoContext = createContext<CardInfoContextType>({
  cardInfoList: [],
  dispatch: () => {},
});

export function CardInfoListProvider({ children }: React.PropsWithChildren) {
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
}

export default CardInfoListProvider;

type Action = { type: "ADD"; payload: Omit<CardInfo, "id"> };

const cardInfoReducer = (state: CardInfo[], action: Action) => {
  switch (action.type) {
    case "ADD": {
      const newCard: CardInfo = {
        id: getRandomId(6),
        ...action.payload,
      };

      return [newCard, ...state];
    }
  }
};
