import {usePayments} from "../paymentsContext.tsx";
import useForm from "../../../libs/form/useForm.ts";
import {ICard} from "../type.ts";
import {createCardFormOptions} from "./createCardFormOptions.ts";
import {useRouter} from "../../../libs/router";

export default function CreatePage() {
  const { addCard } = usePayments()
  const { register, getValues, handleSubmit} = useForm<ICard>(createCardFormOptions)
  const router = useRouter()

  const onSubmit = (formData: ICard) => {
    addCard(formData)
    router.go('/payments')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>카드 생성 페이지</div>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          {
            Array.from({ length: 4 }).map((_, index) => (
              <input
                key={`cardNumber-${index}`}
                className="input-basic"
                {...register(`cardNumbers.${index}.numbers`)}
                autoComplete="new-password"
              />
            ))
          }
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">만료일</span>
        <div className="input-box w-50">
          <input
            className="input-basic"
            type="text"
            placeholder="MM"
            {...register('expirationMonth')}
          />
          <input
            className="input-basic"
            type="text"
            placeholder="YY"
            {...register('expirationYear')}
          />
        </div>
      </div>
      <div className="input-container">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <input type="text" className="input-basic" {...register('owner')}/>
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input className="input-basic w-25" {...register('securityCode')}/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        {
          Array.from({ length: 4 }).map((_, index) => (
            <input
              key={`cardPassword-${index}`}
              className="input-basic w-15"
              {...register(`password.${index}`)}
              maxLength={1}
            />
          ))
        }
      </div>

      <button>다음</button>
    </form>
  )
}