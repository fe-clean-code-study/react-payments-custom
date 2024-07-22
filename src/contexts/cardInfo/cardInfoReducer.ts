import { CardInfo } from "../../types";
import { getRandomId } from "../../utils";
import { Action } from "./types";

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

export default cardInfoReducer;
