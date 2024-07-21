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

type Action =
  | { type: "ADD"; payload: Omit<CardInfo, "id"> }
  | { type: "UPDATE_NICKNAME"; payload: Pick<CardInfo, "id" | "nickname"> };

const cardInfoReducer = (state: CardInfo[], action: Action) => {
  switch (action.type) {
    case "ADD": {
      const newCard: CardInfo = {
        id: getRandomId(6),
        ...action.payload,
      };

      return [newCard, ...state];
    }
    case "UPDATE_NICKNAME": {
      const { id, nickname } = action.payload;
      const index = state.findIndex((cardInfo) => cardInfo.id === id)!;
      const selectedCardInfo = state[index];

      const updatedCardInfo: CardInfo = {
        ...selectedCardInfo,
        nickname: nickname.length === 0 ? selectedCardInfo.nickname : nickname,
      };

      return [
        ...state.slice(0, index),
        updatedCardInfo,
        ...state.slice(index + 1),
      ];
    }
  }
};
