import { useState } from "react";
import { isPositiveInteger } from "../utils";

const useCardForm = () => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [userName, setUserName] = useState("");
  const [cardName, setCardName] = useState("");
  const [color, setColor] = useState("");
  const [nickname, setNickname] = useState("");

  const handleCardNumber = (value: string, index: number) => {
    const copy = [...cardNumber];
    copy[index] = value;

    if (isPositiveInteger(value) || value === "") {
      setCardNumber(copy);
    }
  };

  const handleExpiredMonth = (value: string) => {
    if (isPositiveInteger(value, 12) || value === "") {
      setExpiredMonth(value);
    }
  };

  const handleExpiredYear = (value: string) => {
    if (isPositiveInteger(value) || value === "") {
      setExpiredYear(value);
    }
  };

  const handleUserName = (value: string) => {
    setUserName(value);
  };

  const handleCardNameAndColor = (name: string, cardColor: string) => {
    setCardName(name);
    setColor(cardColor);
  };

  const handleNickname = (value: string) => {
    setNickname(value);
  };

  return {
    cardNumber,
    expiredMonth,
    expiredYear,
    userName,
    cardName,
    color,
    nickname,
    handleCardNumber,
    handleExpiredMonth,
    handleExpiredYear,
    handleUserName,
    handleCardNameAndColor,
    handleNickname,
  };
};

export default useCardForm;
