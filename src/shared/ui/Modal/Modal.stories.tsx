import { Modal } from './index';

import { useDisclosure } from '~/shared/hooks';
import { Button } from '~/shared/ui';

export default {
  title: 'components/Modal',
  component: Modal.Root,
};

export const Root = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button.Root onClick={onOpen}>
        <Button.Label>Open Modal</Button.Label>
      </Button.Root>
      <Modal.Root isOpen={isOpen} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <Button.Root onClick={onClose}>
              <Button.Label>Close Modal</Button.Label>
            </Button.Root>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
