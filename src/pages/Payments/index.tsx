import { FormProvider, useForm } from 'react-hook-form';
import { ModalHeader, ModalBody, Button, ModalFooter } from '../../components';
import {
  PayAmountInformation,
  PayCardInformation,
  PayTermInformation,
} from './components';
import * as S from './index.style';

const Payments = () => {
  const methods = useForm();

  return (
    <>
      <ModalHeader></ModalHeader>
      <form>
        <ModalBody>
          <FormProvider {...methods}>
            <PayCardInformation />
            <PayAmountInformation />
            <PayTermInformation />
          </FormProvider>
        </ModalBody>
        <ModalFooter>
          <S.ButtonContainer>
            <Button type='reset'>
              <S.ButtonLabel>취소하기</S.ButtonLabel>
            </Button>
            <Button type='submit'>
              <S.ButtonLabel>결제하기</S.ButtonLabel>
            </Button>
          </S.ButtonContainer>
        </ModalFooter>
      </form>
    </>
  );
};

export default Payments;
