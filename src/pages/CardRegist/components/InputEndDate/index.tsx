import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import {
  Information,
  InformationBody,
  InformationHeader,
  InputWrapper,
  Input,
} from '~/components';

const InputEndDate = () => {
  const { control, getFieldState, formState } = useFormContext();
  const InputRefArray = useRef<(HTMLInputElement | null)[]>([null, null]);
  const { invalid } = getFieldState('endDate', formState);

  return (
    <Information>
      <InformationHeader>
        <TitleText label={'카드 만료일'} />
      </InformationHeader>
      <InformationBody>
        <S.InputEndDateContainer>
          <InputWrapper isInvalidation={invalid}>
            <Controller
              name='endDate.month'
              rules={{ minLength: 2, max: 12, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  ref={(element) => (InputRefArray.current[0] = element)}
                  onlyNumber={true}
                  maxLength={2}
                  onChange={onChange}
                  placeholder={'MM'}
                  textAlign='center'
                  onComplete={() => {
                    InputRefArray.current[1]?.focus();
                  }}
                />
              )}
            />
            /
            <Controller
              name='endDate.day'
              control={control}
              rules={{ minLength: 2, max: 31, required: true }}
              render={({ field: { onChange } }) => (
                <Input
                  ref={(element) => (InputRefArray.current[1] = element)}
                  onlyNumber={true}
                  maxLength={2}
                  textAlign='center'
                  placeholder={'YY'}
                  onChange={onChange}
                />
              )}
            />
          </InputWrapper>
        </S.InputEndDateContainer>
      </InformationBody>
    </Information>
  );
};

export default InputEndDate;
