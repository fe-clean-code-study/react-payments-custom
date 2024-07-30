import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputLenghtStatus = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray300};
`;
