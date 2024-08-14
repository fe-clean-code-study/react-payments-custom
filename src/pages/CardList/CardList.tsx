import { Modal } from '~/shared/ui';
import { RegistedCards, AddCard, Header } from '~/widgets/CardList';
import { Layout } from '~/widgets/Common';

const CardList = () => {
  return (
    <Modal.Root isOpen={true} onClose={() => {}}>
      <Modal.Overlay />
      <Layout.Content>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Modal.Body>
          <RegistedCards />
        </Modal.Body>
        <AddCard />
      </Layout.Content>
    </Modal.Root>
  );
};

export default CardList;
