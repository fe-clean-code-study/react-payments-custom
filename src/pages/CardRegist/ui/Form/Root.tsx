import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import * as S from './Form.style';

import {
  CardDesign,
  CompanyField,
  CardUserField,
  NumbersField,
  CVCField,
  PasswordField,
  ExpirationDateField,
} from '~/features/RegistCard';
import { useDisclosure } from '~/shared/hooks';
import { Button, Drawer } from '~/shared/ui';

const Root = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      numbers: ['', '', '', ''],
      expirationDate: {
        month: '',
        year: '',
      },
      cardUser: '',
      company: '',
      securityCode: '',
      password: ['', ''],
      alias: '',
    },
    mode: 'onBlur',
  });
  const companyDrawerDisclosure = useDisclosure();
  const { formState } = methods;

  return (
    <S.Container>
      <FormProvider {...methods}>
        <CardDesign onClick={companyDrawerDisclosure.onOpen} />
        <Drawer.Root {...companyDrawerDisclosure}>
          <Drawer.Overlay />
          <Drawer.Content>
            <CompanyField />
          </Drawer.Content>
        </Drawer.Root>
        <S.FieldContainer>
          <NumbersField />
        </S.FieldContainer>
        <S.FieldContainer>
          <ExpirationDateField />
        </S.FieldContainer>
        <S.FieldContainer>
          <CardUserField />
        </S.FieldContainer>
        <S.FieldContainer>
          <CVCField />
        </S.FieldContainer>
        <S.FieldContainer>
          <PasswordField />
        </S.FieldContainer>
      </FormProvider>
      {formState.isValid && (
        <S.ButtonContainer>
          <S.ButtonRoot
            onClick={() => {
              navigate('/card-alias');
            }}
          >
            <Button.Label>다음</Button.Label>
          </S.ButtonRoot>
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Root;
