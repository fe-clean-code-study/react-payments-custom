import { ComponentProps } from 'react';

import * as S from './Common.style';

import { Modal } from '~/shared/ui';

export interface RootProps extends ComponentProps<'div'> {}

const Root = ({ children }: RootProps) => {
  return (
    <S.Root initialOpen={true} closeDisabled={true}>
      <Modal.Overlay />
      <Modal.Content>{children}</Modal.Content>
    </S.Root>
  );
};

export default Root;
