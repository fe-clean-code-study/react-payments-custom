import styled from '@emotion/styled';

import { Modal } from '~/shared/ui';

export const Root = styled(Modal.Root)`
  & > * {
    padding: 10px;
  }
`;

export const Body = styled(Modal.Body)`
  width: 400px;
  height: 700px;
`;

export const Header = styled(Modal.Header)`
  width: 100%;
  height: 50px;
`;
