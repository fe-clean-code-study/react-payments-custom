import { FormProvider, useForm } from 'react-hook-form';
import { ModalBody, ModalFooter, ModalHeader, Card } from '../../components';
import * as S from './index.style';
import { MyCardForm } from '../../types';
import {
  InputNumbers,
  InputEndDate,
  InputCardUser,
  InputSecurityCode,
  InputPassword,
  InputCard,
} from './components';
import { useModal } from '../../hooks';

const CardRegist = () => {
  const methods = useForm<MyCardForm>({
    defaultValues: {
      numbers: ['', '', '', ''],
      endDate: { month: '', day: '' },
      cardUser: '',
      company: 'none',
      securityCode: '',
      password: ['', '', '', ''],
    },
  });
  const { watch } = methods;
  const { isOpen, close, open } = useModal(true);

  return (
    <>
      <ModalHeader>
        <h3 className='page-title'>카드 추가</h3>
      </ModalHeader>
      <ModalBody>
        <Card
          numbers={watch('numbers')}
          endDate={watch('endDate')}
          cardUser={watch('cardUser')}
          company={watch('company')}
          onClick={() => {
            open();
          }}
        />
        <FormProvider {...methods}>
          <S.Form>
            <InputCard isOpen={isOpen} close={close} />
            <InputNumbers />
            <InputEndDate />
            <InputCardUser />
            <InputSecurityCode />
            <InputPassword />
          </S.Form>
        </FormProvider>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
};

export default CardRegist;
