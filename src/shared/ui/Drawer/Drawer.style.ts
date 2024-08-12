import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.blackAlpha};
  z-index: 100;
`;

export interface ContentProps {
  placement: 'top' | 'right' | 'bottom' | 'left';
}

function getTopPosition(placement: ContentProps['placement']) {
  let top;

  switch (placement) {
    case 'top':
      top = 0;
      break;
    case 'right':
      top = 0;
      break;
    case 'left':
      top = 0;
      break;
    default:
      break;
  }

  return css`
    top: ${top}px;
  `;
}

function getRightPosition(placement: ContentProps['placement']) {
  let right;

  switch (placement) {
    case 'right':
      right = 0;
      break;
    case 'top':
      right = 0;
      break;
    case 'bottom':
      right = 0;
      break;
    default:
      break;
  }

  return css`
    right: ${right}px;
  `;
}

function getBottomPosition(placement: ContentProps['placement']) {
  let bottom;

  switch (placement) {
    case 'bottom':
      bottom = 0;
      break;
    default:
      break;
  }

  return css`
    bottom: ${bottom}px;
  `;
}

function getLeftPosition(placement: ContentProps['placement']) {
  let left;

  switch (placement) {
    case 'left':
      left = 0;
      break;
    case 'top':
      left = 0;
      break;
    case 'bottom':
      left = 0;
      break;
    default:
      break;
  }

  return css`
    left: ${left}px;
  `;
}

export const Content = styled.div<ContentProps>`
  position: fixed;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 101;
  padding: 20px;
  min-width: ${({ placement }) =>
    placement === 'left' || placement === 'right' ? '200px' : '100%'};
  min-height: ${({ placement }) =>
    placement === 'top' || placement === 'bottom' ? '200px' : '100%'};
  ${({ placement }) => getTopPosition(placement)};
  ${({ placement }) => getRightPosition(placement)};
  ${({ placement }) => getBottomPosition(placement)};
  ${({ placement }) => getLeftPosition(placement)};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
`;
