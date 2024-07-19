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
  const [cardInfoList, dispatch] = useReducer(cardInfoReducer, [
    {
      id: "jlkjfsld1",
      cardName: "일반 카드",
      cardNumber: ["1111", "2222", "3333", "4444"],
      userName: "정찬욱1",
      expiredMonth: "12",
      expiredYear: "25",
      nickname: "닉네임1",
    },
    {
      id: "jlkjfsld2",
      cardName: "일반 카드",
      cardNumber: ["1111", "2222", "3333", "4444"],
      userName: "정찬욱",
      expiredMonth: "12",
      expiredYear: "25",
      nickname: "닉네임2",
    },
  ]);

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

type Action = { type: "ADD"; payload: Omit<CardInfo, "id" | "nickname"> };

const cardInfoReducer = (state: CardInfo[], action: Action) => {
  switch (action.type) {
    case "ADD": {
      const { cardName, cardNumber, userName, expiredMonth, expiredYear } =
        action.payload;
      const newCard: CardInfo = {
        id: getRandomId(6),
        cardName,
        cardNumber,
        userName,
        expiredMonth,
        expiredYear,
        nickname: "",
      };

      return [newCard, ...state];
    }
  }
};
