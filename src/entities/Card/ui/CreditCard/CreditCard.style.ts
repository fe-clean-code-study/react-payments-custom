import styled from '@emotion/styled';

import { Company } from '~/entities/Card/types';

interface CreditCardProps {
  size: 'small' | 'big';
  company?: Company;
}

interface CardChipProps {
  size: 'small' | 'big';
}

export const Root = styled.div<CreditCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: ${({ size }) => (size === 'small' ? 208 : 290)}px;
  height: ${({ size }) => (size === 'small' ? 130 : 180)}px;
  font-size: ${({ size }) => (size === 'small' ? 12 : 16)}px;

  background: ${({ theme, company }) =>
    company ? theme.cardColor[company] : theme.cardColor.NONE};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.color.blackAlpha};

  border-radius: 5px;
  padding: 10px 20px;
`;

export const Top = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Chip = styled.div<CardChipProps>`
  width: ${({ size }) => (size === 'small' ? 40 : 55.04)}px;
  height: ${({ size }) => (size === 'small' ? 26 : 35.77)}px;
  left: 20px;
  top: 40px;

  background: ${({ theme }) => theme.color.yellow500};
  border-radius: 4px;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const CardNumberList = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CardNumberItem = styled.div`
  min-width: 30px;
  flex-grow: 1;
  text-align: center;
`;

export const CardBottomLeft = styled.div``;

export const CardBottomRight = styled.div``;
