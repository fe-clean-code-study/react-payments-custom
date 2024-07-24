import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  PayAmountInformation,
  PayCardInformation,
  PayTermInformation,
} from './components';
import * as S from './index.style';
import { ModalHeader, ModalBody, Button, ModalFooter } from '../../components';

const Payments = () => {
  const [isInvalidation, setIsInvalidation] = useState(true);
  const methods = useForm({
    defaultValues: {
      card: undefined,
      checkTerm: false,
    },
    mode: 'onChange',
  });
  const { formState } = methods;

  useEffect(() => {
    setIsInvalidation(!formState.isValid);
  }, [formState.isValid]);

  return (
    <>
      <ModalHeader>Pay 결제</ModalHeader>
      <ModalBody>
        <S.Form>
          <FormProvider {...methods}>
            <S.InformationList>
              <PayCardInformation />
              <PayAmountInformation />
              <PayTermInformation />
            </S.InformationList>
          </FormProvider>
        </S.Form>
      </ModalBody>
      <ModalFooter>
        <S.ButtonContainer>
          <Button type='reset'>
            <S.ButtonLabel>취소하기</S.ButtonLabel>
          </Button>
          <Button type={isInvalidation ? 'reset' : 'submit'}>
            <S.ButtonLabel>결제하기</S.ButtonLabel>
          </Button>
        </S.ButtonContainer>
      </ModalFooter>
    </>
  );
};

export default Payments;
