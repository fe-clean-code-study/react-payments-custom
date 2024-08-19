import { ComponentProps, CSSProperties } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './CardUserField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { Field } from '~/shared/ui';

export interface RootProps extends ComponentProps<'div'> {
  style?: CSSProperties;
  isError?: boolean;
}

export const Root = ({ style, isError = false, ...props }: RootProps) => {
  const { register, watch } = useFormContext();
  const MAX_LENGTH = 20;
  const currentLength = watch('cardUser').length;

  return (
    <Field.Root style={style} {...props}>
      <Field.Label>
        <S.LabelContainer>
          <div>카드 사용자</div>
          <div>
            {currentLength}/{MAX_LENGTH}
          </div>
        </S.LabelContainer>
      </Field.Label>
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