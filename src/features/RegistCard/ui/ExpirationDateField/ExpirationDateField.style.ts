import styled from '@emotion/styled';

import { Field } from '~/shared/ui';

export const InputWrapper = styled(Field.InputWrapper)`
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const DividerText = styled.span`
  color: ${({ theme }) => theme.color.gray500};
`;

export const Input = styled(Field.Input)`
  width: 50px;
`;
