import styled from '@emotion/styled';

import { Button } from '~/shared/ui';

export const BodyContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLabel = styled(Button.Label)`
  font-size: 16px;
`;
