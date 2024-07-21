import styled from '@emotion/styled';

interface InputProps {
  textAlign: 'center' | 'left';
}

export const Input = styled.input<InputProps>`
  width: 50px;
  height: 100%;
  background: transparent;

  padding: 5px;
  border: none;
  outline: none;

  font-size: 16px;
  flex-grow: 1;
  text-align: ${({ textAlign }) => textAlign};
`;
