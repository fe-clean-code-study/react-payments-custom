import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
`;

export const Label = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.green500};
`;
