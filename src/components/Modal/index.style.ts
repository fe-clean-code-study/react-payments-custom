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
  min-width: 400px;
  min-height: 250px;
  max-height: 100vh;
  overflow-y: scroll;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
`;

export const ModalHeader = styled.header`
  width: 100%;
  height: 70px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;

export const ModalBody = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const ModalFooter = styled.footer`
  width: 100%;
  padding: 20px;

  bottom: 0px;

  display: flex;
`;