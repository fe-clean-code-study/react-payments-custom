import { Drawer, RootProps } from './index';

import { useDisclosure } from '~/shared/hooks';
import { Button } from '~/shared/ui';

export default {
  title: 'components/Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  args: {
    placement: 'bottom',
  },
};

type Placement = Pick<RootProps, 'placement'>;

export const Default = (placement: Placement) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button.Root onClick={onOpen}>
        <Button.Label>Open Drawer</Button.Label>
      </Button.Root>
      <Drawer.Root
        isOpen={isOpen}
        onClose={onClose}
        placement={placement.placement}
      >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>Header</Drawer.Header>
          <Drawer.Body>Body</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};
