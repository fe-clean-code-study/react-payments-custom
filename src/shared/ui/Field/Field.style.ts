import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 15px 10px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.green500};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.red500};
  font-size: 12px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray500};
`;
