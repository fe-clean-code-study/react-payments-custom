import { useState } from "react";
import { filterDigits, isPositiveInteger } from "../utils";

const useCardForm = () => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expiredMonth, setExpiredMonth] = useState("");
  const [expiredYear, setExpiredYear] = useState("");
  const [userName, setUserName] = useState("");
  const [cardName, setCardName] = useState("");
  const [color, setColor] = useState("");
  const [nickname, setNickname] = useState("");

  const handleCardNumber = (value: string, index: number) => {
    const filteredValue = filterDigits(value);
    const copy = [...cardNumber];
    copy[index] = filteredValue;

    if (isPositiveInteger(filteredValue) || filteredValue === "") {
      setCardNumber(copy);
    }
  };

  const handleExpiredMonth = (value: string) => {
    const filteredValue = filterDigits(value);

    if (isPositiveInteger(filteredValue, 12) || filteredValue === "") {
      setExpiredMonth(filteredValue);
    }
  };

  const handleExpiredYear = (value: string) => {
    const filteredValue = filterDigits(value);

    if (isPositiveInteger(filteredValue) || filteredValue === "") {
      setExpiredYear(filteredValue);
    }
  };

  const handleUserName = (value: string) => {
    const trimmedValue = value.trim();

    setUserName(trimmedValue);
  };

  const handleCardNameAndColor = (name: string, cardColor: string) => {
    setCardName(name);
    setColor(cardColor);
  };

  const handleNickname = (value: string) => {
    const trimmedValue = value.trim();

    setNickname(trimmedValue);
  };

  return {
    cardInfo: {
      cardNumber,
      expiredMonth,
      expiredYear,
      userName,
      cardName,
      color,
      nickname,
    },
    handleCardNumber,
    handleExpiredMonth,
    handleExpiredYear,
    handleUserName,
    handleCardNameAndColor,
    handleNickname,
  };
};

export default useCardForm;
