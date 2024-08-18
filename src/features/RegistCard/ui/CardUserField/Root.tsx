import { ComponentProps, CSSProperties } from 'react';
import { useFormContext } from 'react-hook-form';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
  isError?: boolean;
}

export const Root = ({ style, isError = false, ...props }: RootProps) => {
  const { register } = useFormContext();

  return (
    <Field.Root style={style} {...props}>
      <Field.Label>카드 사용자</Field.Label>
      <Field.Input
        {...register('cardUser', {
          validate: (value) =>
            validateHelper(cardRegsitFormValidate['cardUser'], value),
        })}
        placeholder='카드 사용자 이름을 입력해주세요.'
      />
      <Field.ErrorText isShow={isError}>
        카드 사용자 이름을 입력해주세요.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
