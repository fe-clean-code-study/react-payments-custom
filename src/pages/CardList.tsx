import { useNavigate } from "react-router-dom";
import { Card } from "../components";

function CardList() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h2 className="page-title mb-10">보유 카드</h2>
      <Card
        type="filled"
        cardName="일반 카드"
        cardNumber={["1", "", "", "3453"]}
        userName=""
        expiredMonth=""
        expiredYear="22"
        nickname=""
        onClick={() => navigate("card-edit/dsfsd")}
      />
      <Card type="empty" onClick={() => navigate("card-edit")} />
    </div>
  );
}

export default CardList;
