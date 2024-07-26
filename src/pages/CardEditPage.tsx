import { useNavigate } from "react-router-dom";
import { CardInfoEdit, CardNicknameEdit } from "../components";
import { useState } from "react";
import { useCardInfo } from "../contexts";
import { useCardForm } from "../hooks";

function CardEditPage() {
  const navigate = useNavigate();
  const { dispatch } = useCardInfo();
  const [step, setStep] = useState<"init" | "nickname">("init");
  const cardForm = useCardForm();

  const handleNextStep = () => {
    setStep("nickname");
  };

  const handleNavigateBack = () => {
    navigate("..");
  };

  const handleAddCardInfo = () => {
    const { nickname, cardName } = cardForm;

    dispatch({
      type: "ADD",
      payload: {
        ...cardForm,
        nickname: nickname.length > 0 ? nickname : cardName,
      },
    });
    navigate("/");
  };

  return (
    <>
      {step === "init" && (
        <CardInfoEdit
          cardForm={cardForm}
          onNextStep={handleNextStep}
          onNavigateBack={handleNavigateBack}
        />
      )}
      {step === "nickname" && (
        <CardNicknameEdit
          title="카드등록이 완료되었습니다."
          placeholder="카드의 별칭을 입력해주세요."
          cardInfo={cardForm}
          onChangeNickname={cardForm.handleNickname}
          onConfirm={handleAddCardInfo}
        />
      )}
    </>
  );
}

export default CardEditPage;
