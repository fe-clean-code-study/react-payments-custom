import { createContext } from "react";
import { CardInfoContextType } from "./types";

const CardInfoContext = createContext<CardInfoContextType>({
  cardInfoList: [],
  dispatch: () => {},
});

export default CardInfoContext;
