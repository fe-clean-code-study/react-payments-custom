import styled from '@emotion/styled';

interface ButtonProps {
  type: 'button' | 'reset' | 'submit';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 0px;
  padding: 7px 10px;

  background-color: ${({ type, theme }) =>
    type === 'button'
      ? `${theme.color.white}`
      : type === 'reset'
        ? `${theme.color.grayBackground}`
        : `${theme.color.mainGreen}`};

  color: ${({ type, theme }) =>
    type === 'button' ? `${theme.color.mainGreen}` : `${theme.color.white}`};
  font-size: 16px;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
