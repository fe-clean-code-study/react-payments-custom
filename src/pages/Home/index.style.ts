import styled from '@emotion/styled';

import { Card } from '~/components/Card/index.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLabel = styled.div`
  width: 100px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
`;

export const ContentContainer = styled.div`
  width: 450px;
  height: 750px;
  background-color: ${({ theme }) => theme.color.white};

  overflow: hidden;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Modal = styled(Card)`
  overflow-y: scroll;
`;
