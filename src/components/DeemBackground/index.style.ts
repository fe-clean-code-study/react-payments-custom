import styled from '@emotion/styled';

export const DeemBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.deemBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;
