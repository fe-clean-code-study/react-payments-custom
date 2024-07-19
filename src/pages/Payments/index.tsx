import { FormProvider, useForm } from 'react-hook-form';
import { ModalHeader, ModalBody, Button } from '../../components';
import {
  PayAmountInformation,
  PayCardInformation,
  PayTermInformation,
} from './components';

const Payments = () => {
  const methods = useForm();

  return (
    <>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <form>
          <FormProvider {...methods}>
            <PayCardInformation />
            <PayAmountInformation />
            <PayTermInformation />
          </FormProvider>
        </form>
        <div>
          <Button type='reset'>결제하기</Button>
          <Button type='submit'>취소하기</Button>
        </div>
      </ModalBody>
    </>
  );
};

export default Payments;
