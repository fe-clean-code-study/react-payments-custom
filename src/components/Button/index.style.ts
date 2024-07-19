import styled from '@emotion/styled';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ type, theme }) =>
    type === 'button'
      ? `${theme.color.white}`
      : type === 'reset'
        ? `${theme.color.grayBackground}`
        : `${theme.color.mainGreen}`};
  border: 0px;
  color: ${({ type, theme }) =>
    type === 'button' ? `${theme.color.mainGreen}` : `${theme.color.white}`};
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
