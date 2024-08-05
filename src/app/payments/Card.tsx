import { ICard } from "../types/paymentTypes.ts";

export default function Card({ type, nickname, cardNumbers = [], expirationMonth, expirationYear, owner }: ICard) {
  return (
    <>
      <div className='card-box'>
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">{type}</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
            <span className="card-text">{
              cardNumbers.map(({ numbers, isPrivate }) => isPrivate ? 'oooo' : numbers.padEnd(4,'_')).join(' - ')
            }</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{owner}</span>
              <span
                className="card-text">{expirationMonth} / {expirationYear}</span>
            </div>
          </div>
        </div>
      </div>
      {
        nickname && <span className='card-nickname'>{nickname}</span>
      }
    </>
  )
}