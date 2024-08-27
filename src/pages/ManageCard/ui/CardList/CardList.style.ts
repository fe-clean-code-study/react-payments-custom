import styled from '@emotion/styled';

import { Button } from '~/shared/ui';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px;
  gap: 20px;
`;

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DeleteButton = styled(Button.Root)`
  position: absolute;
  top: -20px;
  right: -20px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
`;

export const CardAlias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;
