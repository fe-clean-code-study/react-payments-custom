import { ComponentProps, CSSProperties } from 'react';

import { Modal } from '~/shared/ui/Modal';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style, children, ...props }: RootProps) => {
  return (
    <Modal.Header style={style} {...props}>
      {children}
    </Modal.Header>
  );
};

export default Root;
