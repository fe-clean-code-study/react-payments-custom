import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import {
  Information,
  InformationBody,
  InformationHeader,
  InputWrapper,
} from '~/components';
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
    <Information>
      <InformationHeader>
        <TitleText label={'카드번호'} />
      </InformationHeader>
      <InformationBody>
        <S.InputNumbersContainer>
          <InputWrapper isInvalidation={invalid}>
            {inputRefArray.current.map((_, index) => (
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
            ))}
          </InputWrapper>
        </S.InputNumbersContainer>
      </InformationBody>
    </Information>
  );
};

export default InputCardNumbers;
