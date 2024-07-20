import styled from '@emotion/styled';
import { CardCompany } from '../../types';

interface CardProps {
  type: 'register' | 'empty';
  size: 'small' | 'big';
  company: CardCompany;
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

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: ${({ size }) => (size === 'small' ? 208 : 290)}px;
  height: ${({ size }) => (size === 'small' ? 130 : 180)}px;
  font-size: ${({ size }) => (size === 'small' ? 12 : 16)}px;

  background: ${({ theme, type, company }) =>
    type === 'empty' ? theme.color.blackAlpha30 : theme.cardColor[company]};
  box-shadow: 3px 3px 5px ${({ theme }) => theme.color.blackAlpha30};

  user-select: ${({ type }) => (type === 'empty' ? 'none' : 'auto')};
  border-radius: 5px;
  padding: 10px 20px;
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

export const CardNumberItem = styled.div``;

export const CardBottomLeft = styled.div``;

export const CardBottomRight = styled.div``;
