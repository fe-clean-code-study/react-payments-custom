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

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  padding: 20px;
  background-color: white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  box-shadow: 0 0 10px ${({ theme }) => theme.color.blackAlpha};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
`;
