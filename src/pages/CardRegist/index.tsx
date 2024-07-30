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
  CardBody,
  CardFooter,
  CardHeader,
  CreditCard,
  Button,
  GoogleIcon,
} from '~/components';
import { useModal } from '~/hooks';
import { addCard } from '~/store';
import { CardForm } from '~/types';
import { cardRegsitFormValidate } from '~/utils/cardRegistFormValidate';
import generateID from '~/utils/generateID';
import { validateHelper } from '~/utils/validateHelper';

function isFormKey(
  key: string,
): key is keyof typeof cardRegsitFormValidate.form {
  return key in cardRegsitFormValidate.form;
}

function isValueKey(key: string, value: CardForm): key is keyof CardForm {
  return key in value;
}

const CardRegist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, close, open } = useModal(true);
  const methods = useForm<CardForm>({
    mode: 'onChange',
    defaultValues: {
      numbers: ['', '', '', ''],
      endDate: {
        month: '',
        day: '',
      },
      cardUser: '',
      company: undefined,
      securityCode: '',
      password: ['', ''],
    },
  });
  const { watch, formState, getValues } = methods;

  const handleClickCard = () => {
    open();
  };

  const handleClickBackButton = () => {
    navigate('/card-list');
  };

  const handleClickConfirmButton = () => {
    const id = generateID();
    const formValues = getValues();

    for (const key in formValues) {
      if (!isFormKey(key)) continue;
      if (!isValueKey(key, formValues)) continue;
      const fieldValue = formValues[key];

      const result = validateHelper(
        cardRegsitFormValidate.form[key],
        fieldValue,
      );

      if (result !== true) {
        alert(result);
        return;
      }
    }

    dispatch(addCard({ card: { ...getValues(), id } }));
    navigate(`/card-alias/${id}`);
  };

  return (
    <>
      <CardHeader>
        <S.HeaderTitleText>
          <GoogleIcon name='arrowBack' onClick={handleClickBackButton} />
          카드 추가
        </S.HeaderTitleText>
      </CardHeader>
      <CardBody>
        <CreditCard
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
            <InputSecurityCode />
            <InputPassword />
          </S.Form>
        </FormProvider>
      </CardBody>
      <CardFooter>
        {formState.isValid && (
          <S.FooterButtonContainer>
            <Button onClick={handleClickConfirmButton}>다음</Button>
          </S.FooterButtonContainer>
        )}
      </CardFooter>
    </>
  );
};

export default CardRegist;
