import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from 'react';

export interface CardInfoContextProps extends PropsWithChildren {
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  cardInfo: CardInfo;
}

export const CardInfoContext = createContext<CardInfoContextProps | undefined>(
  undefined
);

export const CardInfoProvider = ({
  children,
  cardInfo,
  setCardInfo,
}: CardInfoContextProps) => {
  return (
    <CardInfoContext.Provider value={{ setCardInfo, cardInfo }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export default CardInfoProvider;
