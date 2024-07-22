import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

const ArrowIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 17' fill='none'>
      <path
        d='M8.30426 1L1.36476 8.78658L9.15134 15.7261'
        stroke='#525252'
        strokeWidth='1.5'
      />
    </svg>
  );
};

interface ArrowButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  direction?: 'left' | 'right' | 'up' | 'down';
}

const ArrowButton = ({ direction, ...props }: ArrowButtonProps) => {
  return (
    <ArrowButtonLayout direction={direction} {...props}>
      <ArrowIcon />
    </ArrowButtonLayout>
  );
};

const ArrowButtonLayout = styled.button<Pick<ArrowButtonProps, 'direction'>>`
  padding: 0;
  border: none;
  background-color: transparent;
  transform: ${({ direction }) => {
    switch (direction) {
      case 'left':
        return 'rotate(0deg)';
      case 'right':
        return 'rotate(180deg)';
      case 'up':
        return 'rotate(90deg)';
      case 'down':
        return 'rotate(270deg)';
      default:
        return 'rotate(0deg)';
    }
  }};
  width: 30px;
`;

export default ArrowButton;
