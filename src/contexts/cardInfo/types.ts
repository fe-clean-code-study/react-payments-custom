import { CardInfo } from "../../types";

export type Action =
  | { type: "ADD"; payload: Omit<CardInfo, "id"> }
  | { type: "UPDATE_NICKNAME"; payload: Pick<CardInfo, "id" | "nickname"> };

export interface CardInfoContextType {
  cardInfoList: CardInfo[];
  dispatch: React.Dispatch<Action>;
}
