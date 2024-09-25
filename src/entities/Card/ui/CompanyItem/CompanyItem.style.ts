import styled from '@emotion/styled';

import { Company } from '../../types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
`;

interface ColorProps {
  company: Company;
}

export const Color = styled.div<ColorProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme, company }) => theme.cardColor[company]};
  cursor: pointer;
`;
