import usePayments from "../usePayments.tsx";
import {useRouter} from "../../../libs/router";
import Card from "../Card.tsx";

export default function ListPage() {
  const { cards } = usePayments()
  const router = useRouter()

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {
        cards.map((card) => (
          <Card key={card.id} {...card}/>
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