import { useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TitleText from './TitleText';
import {
  Information,
  InformationBody,
  InformationHeader,
  InputWrapper,
  Input,
} from '../../../components';
import * as S from '../index.style';

const InputEndDate = () => {
  const { control, getFieldState, formState } = useFormContext();
  const [isInvalidation, setIsInvalidation] = useState<boolean>(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const { invalid } = getFieldState('endDate', formState);

  useEffect(() => {
    setIsInvalidation(invalid);
  }, [invalid]);

  return (
    <Information>
      <InformationHeader>
        <TitleText label={'카드 만료일'} />
      </InformationHeader>
      <InformationBody>
        <S.InputEndDateContainer>
          <InputWrapper isInvalidation={isInvalidation}>
            <Controller
              name='endDate.month'
              rules={{ maxLength: 2, minLength: 2, max: 12, required: true }}
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={firstInputRef}
                  maxLength={2}
                  onChange={onChange}
                  placeholder={'MM'}
                  textAlign='center'
                  onComplete={() => {
                    secondInputRef.current?.focus();
                  }}
                />
              )}
            />
            /
            <Controller
              name='endDate.day'
              control={control}
              rules={{ maxLength: 2, minLength: 2, max: 31, required: true }}
              render={({ field: { onChange } }) => (
                <Input
                  onlyNumber={true}
                  ref={secondInputRef}
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
