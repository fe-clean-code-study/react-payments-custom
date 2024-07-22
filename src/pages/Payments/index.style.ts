import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonLabel = styled.div`
  padding: 5px;
`;

export const PayAmountBody = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: bold;
`;

export const TermInformationTop = styled.div`
  display: flex;
  gap: 10px;

  font-size: 14px;
`;

export const TermInformationBottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

export const TitleText = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.color.grayBackground};
  padding: 5px 0px;
`;
