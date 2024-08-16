import { FormProvider, useForm } from 'react-hook-form';

import { CardDesign } from '~/features/RegistCard';
import { useDisclosure } from '~/shared/hooks';

const CardRegistForm = () => {
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
    <FormProvider {...methods}>
      <CardDesign onClick={companyDrawerDisclosure.onOpen} />
    </FormProvider>
  );
};

export default CardRegistForm;
