import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

export const CreditCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: 208px;
  height: 130px;
  background-color: ${({ theme }) => theme.color.grayBackground};

  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;
