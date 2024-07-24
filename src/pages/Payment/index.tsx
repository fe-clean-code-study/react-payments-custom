import { FormProvider, useForm } from 'react-hook-form';

import { PaymentAmount, CardSelection, TermAgreement } from './components';
import * as S from './index.style';

import { ModalHeader, ModalBody, Button, ModalFooter } from '~/components';

const Payment = () => {
  const methods = useForm({
    defaultValues: {
      card: undefined,
      amount: '500,000,000',
      checkTerm: false,
    },
    mode: 'onChange',
  });
  const { formState } = methods;

  return (
    <>
      <ModalHeader>Pay 결제</ModalHeader>
      <FormProvider {...methods}>
        <S.Form>
          <ModalBody>
            <S.InformationList>
              <CardSelection />
              <PaymentAmount amount={'500,000,000'} />
              <TermAgreement />
            </S.InformationList>
          </ModalBody>
          <ModalFooter>
            <S.ButtonContainer>
              <Button type='reset'>
                <S.ButtonLabel>취소하기</S.ButtonLabel>
              </Button>
              <Button type={formState.isValid ? 'submit' : 'reset'}>
                <S.ButtonLabel>결제하기</S.ButtonLabel>
              </Button>
            </S.ButtonContainer>
          </ModalFooter>
        </S.Form>
      </FormProvider>
    </>
  );
};

export default Payment;
