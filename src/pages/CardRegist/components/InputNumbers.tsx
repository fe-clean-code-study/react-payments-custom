import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  InputWrapper,
} from '../../../components';
import * as S from '../index.style';
import { Input } from '../../../components';
import { useRef } from 'react';

const InputNumbers = () => {
  const { control } = useFormContext();
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>카드 번호</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.InputNumbersContainer>
          <InputWrapper>
            <Controller
              name='numbers.0'
              rules={{ maxLength: 4, minLength: 4, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={firstInputRef}
                  onChange={onChange}
                  maxLength={4}
                  textAlign='center'
                  onComplete={() => {
                    secondInputRef.current?.focus();
                  }}
                />
              )}
            />
            <Controller
              name='numbers.1'
              rules={{ maxLength: 4, minLength: 4, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={secondInputRef}
                  onChange={onChange}
                  textAlign='center'
                  maxLength={4}
                  onComplete={() => {
                    thirdInputRef.current?.focus();
                  }}
                />
              )}
            />
            <Controller
              name='numbers.2'
              rules={{ maxLength: 4, minLength: 4, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={thirdInputRef}
                  type='password'
                  onChange={onChange}
                  textAlign='center'
                  maxLength={4}
                  onComplete={() => {
                    fourthInputRef.current?.focus();
                  }}
                />
              )}
            />
            <Controller
              name='numbers.3'
              rules={{ maxLength: 4, minLength: 4, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={fourthInputRef}
                  type='password'
                  textAlign='center'
                  onChange={onChange}
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
