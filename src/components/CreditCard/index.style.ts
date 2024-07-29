import styled from '@emotion/styled';

import { CardCompany } from '~/types';

interface CreditCardProps {
  size: 'small' | 'big';
  company: CardCompany;
  clickable: boolean;
}

interface CardChipProps {
  size: 'small' | 'big';
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

export const CreditCard = styled.div<CreditCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: ${({ size }) => (size === 'small' ? 208 : 290)}px;
  height: ${({ size }) => (size === 'small' ? 130 : 180)}px;
  font-size: ${({ size }) => (size === 'small' ? 12 : 16)}px;

  background: ${({ theme, company }) =>
    company === 'none' ? theme.color.blackAlpha30 : theme.cardColor[company]};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.color.blackAlpha30};

  user-select: ${({ company }) => (company === 'none' ? 'none' : 'auto')};
  border-radius: 5px;
  padding: 10px 20px;

  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

export const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardChip = styled.div<CardChipProps>`
  width: ${({ size }) => (size === 'small' ? 40 : 55.04)}px;
  height: ${({ size }) => (size === 'small' ? 26 : 35.77)}px;
  left: 20px;
  top: 40px;

  background: ${({ theme }) => theme.color.darkYellow};
  border-radius: 4px;
`;

export const CardMiddle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardBottom = styled.div`
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
