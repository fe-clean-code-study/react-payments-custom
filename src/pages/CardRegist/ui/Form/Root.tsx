import { FormProvider, useForm } from 'react-hook-form';

import * as S from './Form.style';

import { CardDesign } from '~/features/RegistCard';
import { useDisclosure } from '~/shared/hooks';

const Root = () => {
  const methods = useForm({
    defaultValues: {
      numbers: ['', '', '', ''],
      expirationDate: {
        month: '',
        year: '',
      },
      cardUser: '',
      company: undefined,
      securityCode: '',
      password: ['', ''],
      alias: '',
    },
  });
  const companyDrawerDisclosure = useDisclosure();
  // const passwordDrawerDisclosre = useDisclosure();

  return (
    <S.Container>
      <FormProvider {...methods}>
        <CardDesign onClick={companyDrawerDisclosure.onOpen} />
      </FormProvider>
    </S.Container>
  );
};

export default Root;
