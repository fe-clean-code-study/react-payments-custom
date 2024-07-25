import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  InputCardNumbers,
  InputEndDate,
  InputCardUser,
  InputSecurityCode,
  InputPassword,
  InputCompany,
} from './components';
import * as S from './index.style';

import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  Button,
  PrevIcon,
} from '~/components';
import { useModal } from '~/hooks';
import { addCard } from '~/store';
import { CardForm } from '~/types';
import generateID from '~/utils/generateID';

const CardRegist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, close, open } = useModal(true);
  const methods = useForm<CardForm>({
    mode: 'onChange',
  });
  const { watch, formState, getValues } = methods;

  const handleClickCard = () => {
    open();
  };

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
          onClick={handleClickCard}
        />
        <FormProvider {...methods}>
          <S.Form>
            <InputCompany isOpen={isOpen} close={close} />
            <InputCardNumbers />
            <InputEndDate />
            <InputCardUser />
            {/* <InputSecurityCode /> */}
            {/* <InputPassword /> */}
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
