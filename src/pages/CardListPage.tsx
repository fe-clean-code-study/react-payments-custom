import { useNavigate } from "react-router-dom";
import { Button, Card, Title } from "../components";
import { useCardInfo } from "../contexts";

function CardListPage() {
  const navigate = useNavigate();
  const { cardInfoList, dispatch } = useCardInfo();

  const handleDeleteCard = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  return (
    <div className="app">
      <Title level={2} className="page-title mb-10">
        보유 카드
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          paddingBottom: "50px",
        }}
      >
        {cardInfoList.map((cardInfo) => (
          <div
            key={cardInfo.id}
            style={{
              position: "relative",
              width: "208px",
            }}
          >
            <Card
              type="filled"
              size="small"
              {...cardInfo}
              onClick={() => navigate(`card-edit/${cardInfo.id}`)}
            />
            <Button
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                width: "25px",
                height: "25px",
                backgroundColor: "#e5e5e5",
                borderRadius: "50%",
              }}
              onClick={() => handleDeleteCard(cardInfo.id)}
            >
              X
            </Button>
          </div>
        ))}

        <Card type="empty" onClick={() => navigate("card-edit")} />
      </div>
    </div>
  );
}

export default CardListPage;
