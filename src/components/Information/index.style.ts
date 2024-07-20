import styled from '@emotion/styled';

export const Information = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const InformationHeader = styled.div`
  width: 100%;
  padding: 10px 5px;

  font-size: 20px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${({ theme }) => theme.color.grayBackground};
`;

export const InformationBody = styled.div`
  width: 100%;
  padding: 10px 5px;
`;
