import styled from '@emotion/styled';

export const Root = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
`;

export const Header = styled.div`
  padding: 10px;
  font-weight: bold;
`;

export const Body = styled.div`
  padding: 10px;
`;

export const Footer = styled.div`
  padding: 10px;
`;
