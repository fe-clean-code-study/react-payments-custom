import {useFormContext} from "../../../libs/form";
import { ICard } from "../type.ts";
import {usePayments} from "../paymentsContext.tsx";
import {useRouter} from "../../../libs/router";

export default function CreateForm() {
  const { addCard } = usePayments()
  const { register, handleSubmit } = useFormContext<ICard>()
  const router = useRouter()

  const onSubmit = (formData: ICard) => {
    addCard(formData)
    router.go('/payments')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-container">
        <span className="input-title">카드 번호</span>
        <div className="input-box">
          {
            Array.from({length: 4}).map((_, index) => (
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
        <input type="text" className="input-basic"
               placeholder="카드에 표시된 이름과 동일하게 입력하세요." {...register('owner')}/>
      </div>
      <div className="input-container">
        <span className="input-title">보안코드(CVC/CVV)</span>
        <input className="input-basic w-25" {...register('securityCode')}/>
      </div>
      <div className="input-container">
        <span className="input-title">카드 비밀번호</span>
        {
          Array.from({length: 4}).map((_, index) => (
            <input
              key={`cardPassword-${index}`}
              className="input-basic w-15"
              {...register(`password.${index}`)}
              maxLength={1}
            />
          ))
        }
      </div>
      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </form>
  )
}