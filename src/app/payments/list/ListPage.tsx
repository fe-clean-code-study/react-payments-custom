import usePayments from "../usePayments.tsx";
import {Fragment} from "react";
import {useRouter} from "../../../libs/router";

export default function ListPage() {
  const cards = usePayments()
  const router = useRouter()

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {
        cards.map(({ type, nickname, cardNumbers, expirationMonth, expirationYear, owner  }, index) => (
          <Fragment key={index}>
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
                      cardNumbers.map(({ numbers, isPrivate }) => isPrivate ? 'oooo' : numbers).join(' - ')
                    }</span>
                  </div>
                  <div className="card-bottom__info">
                    <span className="card-text">{owner}</span>
                    <span className="card-text">{expirationMonth} / {expirationYear}</span>
                  </div>
                </div>
              </div>
            </div>
            <span className='card-nickname'>{nickname}</span>
          </Fragment>
        ))
      }
      <div className="card-box" onClick={() => {
        router.go('/payments/create')
      }}>
        <div className="empty-card">+</div>
      </div>
    </div>
  )
}