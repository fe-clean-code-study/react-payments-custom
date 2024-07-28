import useForm from "../../../libs/form/useForm.ts";
import {ICard} from "../type.ts";
import {createCardFormOptions, initialCard} from "./createCardFormOptions.ts";
import {FormProvider} from "../../../libs/form";
import CreateForm from "./CreateForm.tsx";
import Card from "../Card.tsx";

export default function Page() {
  const formMethods = useForm<ICard>({ formOptions: createCardFormOptions, defaultValues: initialCard })
  const cardValues = formMethods.watch()

  return (
    <div>
      <Card {...cardValues}/>
      <FormProvider formMethods={formMethods}>
        <CreateForm />
      </FormProvider>
    </div>
  )
}