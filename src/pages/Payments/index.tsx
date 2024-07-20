import { FormProvider, useForm } from 'react-hook-form';
import { ModalHeader, ModalBody, Button, ModalFooter } from '../../components';
import {
  PayAmountInformation,
  PayCardInformation,
  PayTermInformation,
} from './components';
import * as S from './index.style';
import { useEffect, useState } from 'react';

const Payments = () => {
  const [validate, setValidate] = useState(false);
  const methods = useForm({
    defaultValues: {
      card: undefined,
      checkTerm: false,
    },
  });
  const { watch, trigger } = methods;
  const watchValues = watch(['card', 'checkTerm']);

  useEffect(() => {
    trigger().then((validate) => setValidate(validate));
  }, [watchValues]);

  return (
    <>
      <ModalHeader></ModalHeader>
      <S.Form>
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
            <Button type={validate ? 'submit' : 'reset'}>
              <S.ButtonLabel>결제하기</S.ButtonLabel>
            </Button>
          </S.ButtonContainer>
        </ModalFooter>
      </S.Form>
    </>
  );
};

export default Payments;
