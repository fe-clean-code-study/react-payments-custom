import styled from '@emotion/styled';

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const NoneCardText = styled.div`
  color: ${({ theme }) => theme.color.grayFont};
  display: flex;
  justify-content: center;
`;

export const CardUl = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const CardLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardNameText = styled.div`
  font-size: 16px;
`;

export const ButtonContainer = styled.div``;
