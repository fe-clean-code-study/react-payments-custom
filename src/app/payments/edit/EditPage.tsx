import { useRouter } from '../../../libs/router'
import { usePayments } from '../paymentsContext.tsx'
import PaymentCard from '../PaymentCard.tsx'
import Input from '../../../components/input'
import { useForm } from '../../../libs/form'
import { ICard } from '../../../types/paymentTypes.ts'

export default function EditPage() {
  const { params: { id } = {}, go } = useRouter()
  const { editCard, cards } = usePayments()

  const targetCard = cards.find((card) => card.id === id)

  const { register, handleSubmit } = useForm<ICard>({
    formOptions: {
      nickname: {
        default: targetCard?.nickname,
      },
    },
  })

  if (!targetCard) {
    return null
  }

  const onSubmit = (updatedData: ICard) => {
    editCard(id, updatedData)
    go('/payments')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex-center'>
        <h2 className='page-title mb-10'>
          {id === 'new' ? '카드등록이 완료되었습니다.' : '별칭 수정'}
        </h2>
      </div>
      <PaymentCard {...targetCard} cardSize='big' />
      <Input.Container className='flex-center w-100'>
        <Input.Value
          className='w-75'
          variant='underline'
          placeholder='카드의 별칭을 입력해주세요.'
          {...register('nickname')}
        />
      </Input.Container>
      <button className='button-box mt-50'>
        <span className='button-text'>다음</span>
      </button>
    </form>
  )
}
