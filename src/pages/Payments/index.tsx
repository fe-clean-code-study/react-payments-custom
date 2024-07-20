import { FormProvider, useForm } from 'react-hook-form';
import { ModalHeader, ModalBody, Button, ModalFooter } from '../../components';
import {
  PayAmountInformation,
  PayCardInformation,
  PayTermInformation,
} from './components';
import * as S from './index.style';

const Payments = () => {
  // defaultValues 는 cards 목록을 가지고 와서 가장 첫번째로 해야함 - 없으면 undefined
  const methods = useForm({
    defaultValues: {
      card: undefined,
      checkTerm: false,
    },
  });
  // 카드 불러와야 함...
  // 1. 카드 컴포넌트 만들기
  // 2. 카드 전역 state 만들기
  // 3. CardSelector 만들기

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
