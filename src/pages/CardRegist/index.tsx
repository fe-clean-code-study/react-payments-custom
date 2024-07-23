import { FormProvider, useForm } from 'react-hook-form';
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  Button,
} from '../../components';
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
import { useNavigate } from 'react-router-dom';

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
    mode: 'onChange',
  });
  const { watch } = methods;
  const navigate = useNavigate();
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
      <ModalFooter>
        <S.FooterButtonContainer>
          <Button
            onClick={() => {
              navigate('/card-alias');
            }}
          >
            다음
          </Button>
        </S.FooterButtonContainer>
      </ModalFooter>
    </>
  );
};

export default CardRegist;
