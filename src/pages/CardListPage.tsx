import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { useCardInfo } from "../contexts";

function CardListPage() {
  const navigate = useNavigate();
  const { cardInfoList, dispatch } = useCardInfo();

  const handleDeleteCard = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  return (
    <div className="app">
      <h2 className="page-title mb-10">보유 카드</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {cardInfoList.map((cardInfo) => (
          <div key={cardInfo.id} style={{ position: "relative" }}>
            <Card
              type="filled"
              size="small"
              {...cardInfo}
              onClick={() => navigate(`card-edit/${cardInfo.id}`)}
            />
            <button
              className="pointer"
              style={{ position: "absolute", top: "-10px", right: "50px" }}
              onClick={() => handleDeleteCard(cardInfo.id)}
            >
              X
            </button>
          </div>
        ))}

        <Card type="empty" onClick={() => navigate("card-edit")} />
      </div>
    </div>
  );
}

export default CardListPage;
