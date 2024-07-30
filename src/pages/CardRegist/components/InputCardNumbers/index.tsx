import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader, InputWrapper } from '~/components';
import { Input } from '~/components';

const InputCardNumbers = () => {
  const { control, getFieldState, formState } = useFormContext();
  const inputRefArray = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const { invalid } = getFieldState('numbers', formState);

  return (
    <Card>
      <CardHeader>
        <TitleText label={'카드번호'} />
      </CardHeader>
      <CardBody>
        <S.InputNumbersContainer>
          <InputWrapper isInvalidation={invalid}>
            {inputRefArray.current.map((_, index) => (
              <>
                <Controller
                  key={index}
                  name={`numbers.${index}`}
                  control={control}
                  rules={{
                    validate: (value) => value.length === 4,
                    required: true,
                  }}
                  render={({ field: { onChange } }) => (
                    <Input
                      onlyNumber={true}
                      textAlign='center'
                      ref={(element) => {
                        if (element instanceof HTMLInputElement) {
                          inputRefArray.current[index] = element;
                        }
                      }}
                      type={index < 2 ? 'text' : 'password'}
                      onChange={onChange}
                      maxLength={4}
                      onComplete={() => {
                        inputRefArray.current[index + 1]?.focus();
                      }}
                    />
                  )}
                />
                {index < 3 && <S.Divider> - </S.Divider>}
              </>
            ))}
          </InputWrapper>
        </S.InputNumbersContainer>
      </CardBody>
    </Card>
  );
};

export default InputCardNumbers;
