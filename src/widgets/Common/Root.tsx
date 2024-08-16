import { ComponentProps } from 'react';

import * as S from './Common.style';

export interface RootProps extends ComponentProps<'div'> {}

const Root = ({ children }: RootProps) => {
  return (
    <S.Root isOpen={true} onClose={() => {}}>
      {children}
    </S.Root>
  );
};

export default Root;
