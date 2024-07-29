import styled from '@emotion/styled';

export const Card = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.white};
`;

export const CardHeader = styled.div`
  width: 100%;

  font-size: 20px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.white};
`;

export const CardBody = styled.div`
  width: 100%;
  padding: 10px 5px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.white};
`;

export const CardFooter = styled.div`
  width: 100%;
  padding: 10px 5px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.white};
`;
