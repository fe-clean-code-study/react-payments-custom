import styled from '@emotion/styled';

import { CardCompany } from '~/types';

interface PaleteProps {
  companey: CardCompany;
}

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.color.white};
`;

export const PaleteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const CompanyName = styled.div``;

export const Color = styled.div<PaleteProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme, companey }) => theme.cardColor[companey]};
  cursor: pointer;
`;
