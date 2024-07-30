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
  const [cardSecurityCode, setCardSecurityCode] = useState("");
  const [cardPassword, setCardPassword] = useState(["", ""]);

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

  const handleCardSecurityCode = (value: string) => {
    const filteredValue = filterDigits(value);

    setCardSecurityCode(filteredValue);
  };

  const handleCardPassword = (value: string, index: number) => {
    const filteredValue = filterDigits(value);
    const copy = [...cardPassword];
    copy[index] = filteredValue;

    if (isPositiveInteger(filteredValue) || filteredValue === "") {
      setCardPassword(copy);
    }
  };

  const handleNickname = (value: string) => {
    const trimmedValue = value.trim();

    setNickname(trimmedValue);
  };

  const isValidForm = () => {
    return !(
      cardNumber.every((number) => number.length === 4) &&
      expiredMonth.length === 2 &&
      expiredYear.length === 2 &&
      userName.length > 0 &&
      cardName.length > 0 &&
      color.length > 0 &&
      cardSecurityCode.length === 3 &&
      cardPassword.every((code) => code.length === 1)
    );
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
      cardSecurityCode,
      cardPassword,
    },
    handleCardNumber,
    handleExpiredMonth,
    handleExpiredYear,
    handleUserName,
    handleCardNameAndColor,
    handleCardSecurityCode,
    handleCardPassword,
    handleNickname,
    isValidForm,
  };
};

export default useCardForm;
