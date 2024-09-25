import styled from '@emotion/styled';

interface AddCardProps {
  size: 'small' | 'big';
}

export const AddCard = styled.div<AddCardProps>`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  width: ${({ size }) => (size === 'small' ? 208 : 290)}px;
  height: ${({ size }) => (size === 'small' ? 130 : 180)}px;
  font-size: ${({ size }) => (size === 'small' ? 12 : 16)}px;

  box-shadow: 3px 3px 5px ${({ theme }) => theme.color.blackAlpha};
  background-color: ${({ theme }) => theme.color.gray200};
  color: ${({ theme }) => theme.color.gray500};

  cursor: pointer;
`;
