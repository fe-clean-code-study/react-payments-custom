import { useFormContext } from '../../../libs/form'
import { ICard } from '../../../types/paymentTypes.ts'
import { usePayments } from '../paymentsContext.tsx'
import { useRouter } from '../../../libs/router'
import { Input, InputContainer, Label } from '../../../components/input'
import CardInputWrapper from './CardInputWrapper.tsx'
import ModalInput from '../../../components/input/ModalInput.tsx'
import CardTypeSelector from './CardTypeSelector.tsx'
import { CARD_TYPES } from '../../../constants/cardTypes.ts'

export default function CreateCardForm() {
  const { addCard } = usePayments()
  const { register, handleSubmit, watch, setValue, checkValueAll } =
    useFormContext<ICard>()
  const router = useRouter()

  const onSubmit = (formData: ICard) => {
    addCard(formData)
    router.go('/payments/new')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalInput {...register('type')}>
        <CardTypeSelector
          options={Object.entries(CARD_TYPES).slice(0, 4)}
          cardType={watch('type')}
          onSelect={(type) => {
            setValue('type', type)
          }}
        />
        <CardTypeSelector
          options={Object.entries(CARD_TYPES).slice(4, 8)}
          cardType={watch('type')}
          onSelect={(type) => {
            setValue('type', type)
          }}
        />
      </ModalInput>
      <CardInputWrapper title='카드 번호'>
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={`cardNumber-${index}`}
            maxLength={4}
            {...register(`cardNumbers.${index}.numbers`)}
          />
        ))}
      </CardInputWrapper>
      <CardInputWrapper title='만료일' boxWidth={50}>
        <Input
          placeholder='MM'
          maxLength={2}
          {...register('expirationMonth')}
        />
        <Input placeholder='YY' maxLength={2} {...register('expirationYear')} />
      </CardInputWrapper>
      <CardInputWrapper title='카드 소유자 이름(선택)'>
        <Input
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          {...register('owner')}
        />
      </CardInputWrapper>
      <InputContainer>
        <Label>보안코드(CVC/CVV)</Label>
        <Input className='w-25' maxLength={3} {...register('securityCode')} />
      </InputContainer>
      <InputContainer>
        <Label>카드 비밀번호</Label>
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={`cardPassword-${index}`}
            className='w-15'
            {...register(`password.${index}`)}
            maxLength={1}
          />
        ))}
      </InputContainer>
      <button className='button-box' disabled={!checkValueAll()}>
        <span className='button-text'>다음</span>
      </button>
    </form>
  )
}
