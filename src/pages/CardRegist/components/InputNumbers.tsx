import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  InputWrapper,
} from '../../../components';
import * as S from '../index.style';
import { Input } from '../../../components';
import { useEffect, useRef, useState } from 'react';

const InputNumbers = () => {
  const { control, getFieldState, formState } = useFormContext();
  const [isInvalidation, setIsInvalidation] = useState<boolean>(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);
  const { invalid } = getFieldState('numbers', formState);

  useEffect(() => {
    setIsInvalidation(invalid);
  }, [invalid]);

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>카드 번호</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.InputNumbersContainer>
          <InputWrapper isInvalidation={isInvalidation}>
            <Controller
              name='numbers.0'
              rules={{
                validate: (value) => value.length === 4,
                required: true,
              }}
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  onlyNumber={true}
                  ref={firstInputRef}
                  defaultValue={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  maxLength={4}
                  textAlign='center'
                  onComplete={() => {
                    secondInputRef.current?.focus();
                  }}
                />
              )}
            />
            -
            <Controller
              name='numbers.1'
              rules={{
                validate: (value) => value.length === 4,
                required: true,
              }}
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  onlyNumber={true}
                  ref={secondInputRef}
                  defaultValue={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  textAlign='center'
                  maxLength={4}
                  onComplete={() => {
                    thirdInputRef.current?.focus();
                  }}
                />
              )}
            />
            -
            <Controller
              name='numbers.2'
              rules={{
                validate: (value) => value.length === 4,
                required: true,
              }}
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  onlyNumber={true}
                  ref={thirdInputRef}
                  defaultValue={value}
                  type='password'
                  onChange={onChange}
                  onBlur={onBlur}
                  textAlign='center'
                  maxLength={4}
                  onComplete={() => {
                    fourthInputRef.current?.focus();
                  }}
                />
              )}
            />
            -
            <Controller
              name='numbers.3'
              rules={{
                validate: (value) => value.length === 4,
                required: true,
              }}
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  onlyNumber={true}
                  ref={fourthInputRef}
                  defaultValue={value}
                  type='password'
                  textAlign='center'
                  onChange={onChange}
                  onBlur={onBlur}
                  maxLength={4}
                />
              )}
            />
          </InputWrapper>
        </S.InputNumbersContainer>
      </InformationBody>
    </Information>
  );
};

export default InputNumbers;
