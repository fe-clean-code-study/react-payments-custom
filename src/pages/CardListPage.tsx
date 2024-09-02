import { useNavigate } from "react-router-dom";
import { Button, Flex, Title } from "../components/common";
import { Card } from "../components/card";
import { useCardInfo } from "../contexts";

const CardListPage = () => {
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
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="15px"
        style={{ paddingBottom: "50px" }}
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
              variant="circle"
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
              }}
              onClick={() => handleDeleteCard(cardInfo.id)}
            >
              X
            </Button>
          </div>
        ))}

        <Card type="empty" onClick={() => navigate("card-edit")} />
      </Flex>
    </div>
  );
};

export default CardListPage;
