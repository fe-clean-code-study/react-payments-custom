import { ComponentProps, CSSProperties } from 'react';

import { Modal } from '~/shared/ui/Modal';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
}

const Root = ({ style, ...props }: RootProps) => {
  return (
    <Modal.Header style={style} {...props}>
      보유 카드
    </Modal.Header>
  );
};

export default Root;
