import styled from '@emotion/styled';

import { Button } from '~/shared/ui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FieldContainer = styled.li`
  width: 100%;
  list-style: none;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;

export const ButtonRoot = styled(Button.Root)`
  width: 70px;
  font-size: 16px;
`;
