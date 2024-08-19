import styled from '@emotion/styled';

import { Field, Keypad } from '~/shared/ui';

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Input = styled(Field.Input)`
  width: 50px;
  text-align: center;
`;

export const EmptyInput = styled(Field.Input)`
  width: 50px;
  text-align: center;
`;

export const KeypadItem = styled(Keypad.Item)``;
