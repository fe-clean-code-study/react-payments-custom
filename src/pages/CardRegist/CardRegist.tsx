import { FormProvider, useForm } from 'react-hook-form';

import type { CardForm } from '~/entities/Card';
import { Modal } from '~/shared/ui';
import { Header } from '~/widgets/CardRegist';
import { Layout } from '~/widgets/Common';

const CardRegist = () => {
  const methods = useForm<CardForm>({
    mode: 'onChange',
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
    },
  });

  return (
    <Modal.Root isOpen={true} onClose={() => {}}>
      <Modal.Overlay />
      <Layout.Content>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Modal.Body>
          <FormProvider {...methods}>
            {/* <CreditCard /> */}
            {/* <CardForm /> */}
          </FormProvider>
        </Modal.Body>
      </Layout.Content>
    </Modal.Root>
  );
};

export default CardRegist;
