import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader, InputWrapper, Input } from '~/components';

const InputEndDate = () => {
  const { control, getFieldState, formState } = useFormContext();
  const InputRefArray = useRef<(HTMLInputElement | null)[]>([null, null]);
  const { invalid } = getFieldState('endDate', formState);

  return (
    <Card>
      <CardHeader>
        <TitleText label={'카드 만료일'} />
      </CardHeader>
      <CardBody>
        <S.InputEndDateContainer>
          <InputWrapper isInvalidation={invalid}>
            <Controller
              name='endDate.month'
              rules={{ minLength: 2, min: 1, max: 12, required: true }}
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
              rules={{ minLength: 2, min: 1, max: 31, required: true }}
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
      </CardBody>
    </Card>
  );
};

export default InputEndDate;
