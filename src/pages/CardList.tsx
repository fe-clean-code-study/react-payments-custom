import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { useContext } from "react";
import { CardInfoContext } from "../context";

function CardList() {
  const navigate = useNavigate();
  const { cardInfoList } = useContext(CardInfoContext);

  return (
    <div className="app">
      <h2 className="page-title mb-10">보유 카드</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {cardInfoList.map((cardInfo) => (
          <Card
            key={cardInfo.id}
            type="filled"
            size="small"
            {...cardInfo}
            onClick={() => navigate(`card-edit/${cardInfo.id}`)}
          />
        ))}

        <Card type="empty" onClick={() => navigate("card-edit")} />
      </div>
    </div>
  );
}

export default CardList;
