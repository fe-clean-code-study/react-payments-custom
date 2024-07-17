import { formatCardNumber, formatExpiredDate } from "../domain";

interface FilledCard {
  type: "filled";
  cardName: string;
  cardNumber: string[];
  userName: string;
  expiredMonth: string;
  expiredYear: string;
}

interface EmptyCard {
  type: "empty";
}

type CardProps = FilledCard | EmptyCard;

function Card(props: CardProps) {
  return (
    <div className="card-box">
      {props.type === "empty" ? (
        <div className="empty-card">+</div>
      ) : (
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">{props.cardName}</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {formatCardNumber(props.cardNumber)}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{props.userName || "NAME"}</span>
              <span className="card-text">
                {formatExpiredDate(props.expiredMonth, props.expiredYear)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
