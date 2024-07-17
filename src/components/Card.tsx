interface CardProps {
  cardName: string;
  cardNumber: [string, string, string, string];
  userName: string;
  expiredMonth: string;
  expiredYear: string;
}

function Card({
  cardName = "공개 카드",
  cardNumber = ["0000", "1111", "2222", "3333"],
  userName = "NAME",
  expiredMonth = "MM",
  expiredYear = "YY",
}: Partial<CardProps>) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text">{cardName}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber.join("-")}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{userName}</span>
            <span className="card-text">
              {expiredMonth + "/" + expiredYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
