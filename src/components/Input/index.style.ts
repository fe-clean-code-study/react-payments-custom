import styled from '@emotion/styled';

interface InputProps {
  textAlign: 'center' | 'left';
}

export const Input = styled.input<InputProps>`
  width: 10px;
  height: 100%;
  padding: 5px 0px;

  background: transparent;
  border: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 16px;
  text-align: ${({ textAlign }) => textAlign};
`;
