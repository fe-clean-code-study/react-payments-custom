import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.red500};
`;

export const Label = styled.label``;
