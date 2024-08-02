import { FormProvider, useForm } from 'react-hook-form';

import { PaymentAmount, CardSelection, TermAgreement } from './components';
import * as S from './index.style';

import { CardHeader, CardBody, Button, CardFooter } from '~/components';

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
      <CardHeader>Pay 결제</CardHeader>
      <FormProvider {...methods}>
        <S.Form>
          <CardBody>
            <S.InformationList>
              <CardSelection />
              <PaymentAmount amount={'500,000,000'} />
              <TermAgreement />
            </S.InformationList>
          </CardBody>
          <CardFooter>
            <S.ButtonContainer>
              <Button type='reset'>
                <S.ButtonLabel>취소하기</S.ButtonLabel>
              </Button>
              <Button
                disabled={!formState.isValid}
                type={formState.isValid ? 'submit' : 'reset'}
              >
                <S.ButtonLabel>결제하기</S.ButtonLabel>
              </Button>
            </S.ButtonContainer>
          </CardFooter>
        </S.Form>
      </FormProvider>
    </>
  );
};

export default Payment;
