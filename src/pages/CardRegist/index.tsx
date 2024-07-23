import { FormProvider, useForm } from 'react-hook-form';
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  Button,
  PrevIcon,
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
import { useDispatch } from 'react-redux';
import { addCard } from '../../store';
import generateID from '../../utils/generateID';

const CardRegist = () => {
  const methods = useForm<MyCardForm>({
    defaultValues: {
      numbers: ['', '', '', ''],
      endDate: { month: '', day: '' },
      cardUser: '',
      company: 'none',
      securityCode: '',
      password: ['', ''],
    },
    mode: 'onChange',
  });
  const { watch, formState, getValues } = methods;
  const navigate = useNavigate();
  const { isOpen, close, open } = useModal(true);
  const dispatch = useDispatch();

  return (
    <>
      <ModalHeader>
        <S.HeaderTitleText>
          <PrevIcon onClick={() => navigate('/card-list')} />
          카드 추가
        </S.HeaderTitleText>
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
        {Object.values(formState.errors).length === 0 && (
          <S.FooterButtonContainer>
            <Button
              onClick={() => {
                const id = generateID();
                dispatch(addCard({ card: { ...getValues(), id } }));
                navigate(`/card-alias/${id}`);
              }}
            >
              다음
            </Button>
          </S.FooterButtonContainer>
        )}
      </ModalFooter>
    </>
  );
};

export default CardRegist;
