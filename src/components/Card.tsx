import { formatCardNumber, formatExpiredDate } from "../domain";
import { CardInfo } from "../types";

interface BaseCard {
  type: "filled" | "empty";
  onClick?: () => void;
}

interface FilledCard extends BaseCard, Omit<CardInfo, "id"> {
  type: "filled";
  size: "small" | "big";
}

interface EmptyCard extends BaseCard {
  type: "empty";
}

type CardProps = FilledCard | EmptyCard;

const Card = (props: CardProps) => {
  const handleClick = () => {
    const { onClick } = props;

    onClick && onClick();
  };

  return (
    <div className="card-box flex-column-center" onClick={handleClick}>
      {props.type === "empty" ? (
        <div className="empty-card pointer">+</div>
      ) : (
        <>
          <div
            className={props.size + "-card"}
            style={{
              marginBottom: "8px",
              backgroundColor: props.color,
              cursor: props.size === "small" ? "pointer" : "default",
            }}
          >
            <div className="card-top">
              <span className={"card-text__" + props.size}>
                {props.cardName}
              </span>
            </div>
            <div className="card-middle">
              <div className={props.size + "-card__chip"}></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className={"card-text__" + props.size}>
                  {formatCardNumber(props.cardNumber)}
                </span>
              </div>
              <div className="card-bottom__info">
                <span className={"card-text__" + props.size + " ellipsis"}>
                  {props.userName || "NAME"}
                </span>
                <span className={"card-text__" + props.size}>
                  {formatExpiredDate(props.expiredMonth, props.expiredYear)}
                </span>
              </div>
            </div>
          </div>
          {props.nickname.length > 0 && (
            <span
              className={props.size === "small" ? "card-name" : ""}
              style={{ cursor: "default" }}
            >
              {props.nickname}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
