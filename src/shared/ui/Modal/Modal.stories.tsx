import { Modal } from './index';

import { Button } from '~/shared/ui';

export default {
  title: 'components/Modal',
  component: Modal.Root,
};

export const Default = () => {
  return (
    <>
      <Modal.Root>
        <Modal.Trigger>
          <Button.Root>
            <Button.Label>Open Modal</Button.Label>
          </Button.Root>
        </Modal.Trigger>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <Modal.CloseButton>
              <Button.Root onClick={close}>
                <Button.Label>Close Modal</Button.Label>
              </Button.Root>
            </Modal.CloseButton>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
