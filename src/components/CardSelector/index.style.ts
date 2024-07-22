import styled from '@emotion/styled';
import { CardCompany } from '../../types';

export const DeemBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.deemBackground};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${({ theme }) => theme.color.white};
`;

interface PaleteProps {
  companey: CardCompany;
}

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
