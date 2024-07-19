import styled from '@emotion/styled';

export const DeemBackground = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.color.deemBackground};
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  min-width: 375px;
  min-height: 220px;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;
