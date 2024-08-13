import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 7px;

  border-radius: 5px;
`;

interface InputProps {
  styleType: 'fill' | 'outline' | 'flushed' | 'ghost';
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 15px 10px;
  outline: none;
  background-color: ${({ theme, styleType }) =>
    styleType === 'fill' ? theme.color.gray100 : theme.color.white};
  border: ${({ theme, styleType }) =>
    styleType === 'outline' ? `1px solid ${theme.color.gray100}` : 'none'};
  border-bottom: ${({ theme, styleType }) =>
    styleType !== 'outline' && styleType === 'flushed'
      ? `1px solid ${theme.color.gray100}`
      : 'none'};
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

interface InputWrapper {
  styleType: 'fill' | 'outline' | 'flushed' | 'ghost';
}

export const InputWrapper = styled.div<InputWrapper>`
  background-color: ${({ theme, styleType }) =>
    styleType === 'fill' ? theme.color.gray100 : theme.color.white};
  border: ${({ theme, styleType }) =>
    styleType === 'outline' ? `1px solid ${theme.color.gray100}` : 'none'};
  border-bottom: ${({ theme, styleType }) =>
    styleType !== 'outline' && styleType === 'flushed'
      ? `1px solid ${theme.color.gray100}`
      : 'none'};
  border-radius: 5px;
`;
