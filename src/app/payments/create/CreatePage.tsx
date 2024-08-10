import useForm from '../../../libs/form/useForm.ts'
import { ICard } from '../../../types/paymentTypes.ts'
import { createCardFormOptions, initialCard } from './createCardFormOptions.ts'
import { FormProvider } from '../../../libs/form'
import CreateCardForm from './CreateCardForm.tsx'
import Card from '../Card.tsx'

export default function CreatePage() {
  const formMethods = useForm<ICard>({
    formOptions: createCardFormOptions,
    defaultValues: initialCard,
  })
  const cardValues = formMethods.watchAll()

  return (
    <div>
      <Card {...cardValues} />
      <FormProvider formMethods={formMethods}>
        <CreateCardForm />
      </FormProvider>
    </div>
  )
}