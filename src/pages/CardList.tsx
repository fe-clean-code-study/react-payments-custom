import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { CardInfo } from "../types";

const data: CardInfo[] = [
  {
    id: "jlkjfsld1",
    cardName: "일반 카드",
    cardNumber: ["1111", "2222", "3333", "4444"],
    userName: "정찬욱",
    expiredMonth: "12",
    expiredYear: "25",
    nickname: "닉네임1",
  },
  {
    id: "jlkjfsld2",
    cardName: "일반 카드",
    cardNumber: ["1111", "2222", "3333", "4444"],
    userName: "정찬욱",
    expiredMonth: "12",
    expiredYear: "25",
    nickname: "닉네임2",
  },
];

function CardList() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <h2 className="page-title mb-10">보유 카드</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {data.map(
          ({
            id,
            cardName,
            cardNumber,
            userName,
            expiredMonth,
            expiredYear,
            nickname,
          }) => (
            <Card
              key={id}
              type="filled"
              cardName={cardName}
              cardNumber={cardNumber}
              userName={userName}
              expiredMonth={expiredMonth}
              expiredYear={expiredYear}
              nickname={nickname}
              onClick={() => navigate(`card-edit/${id}`)}
            />
          )
        )}

        <Card type="empty" onClick={() => navigate("card-edit")} />
      </div>
    </div>
  );
}

export default CardList;
