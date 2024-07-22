import styled from '@emotion/styled';

export const HeaderText = styled.div`
  font-size: 16px;
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
