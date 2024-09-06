import { Drawer, RootProps } from './index';

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
  return (
    <>
      <Drawer.Root placement={placement.placement}>
        <Drawer.Trigger>
          <Button.Root>
            <Button.Label>Open Drawer</Button.Label>
          </Button.Root>
        </Drawer.Trigger>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>Header</Drawer.Header>
          <Drawer.Body>Body</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};
