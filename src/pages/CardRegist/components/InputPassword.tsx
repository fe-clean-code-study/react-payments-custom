import { Controller, useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
  Input,
  InputWrapper,
  Keypad,
} from '../../../components';
import * as S from '../index.style';
import { useModal } from '../../../hooks';
import { useEffect, useState } from 'react';
import { CardPassword, KeypadNumbers } from '../../../types';
import suffle from '../../../utils/suffle';

const InputPassword = () => {
  const defaultNumbers: KeypadNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [password, setPassword] = useState<CardPassword>(['', '', '', '']);
  const [index, setIndex] = useState(0);
  const { control } = useFormContext();
  const { isOpen, open, close } = useModal(false);

  useEffect(() => {
    if (password.every((value) => value.length === 1)) {
      close();
    }
  }, [password, close]);

  useEffect(() => {
    if (index > 3) {
      close();
    }
  }, [index, close]);

  const handleClickInput = (index: number) => {
    setIndex(index);
    open();
  };

  const handleClickKeypad = (value: string, index: number) => {
    const nextState: CardPassword = [...password];
    nextState.splice(index, 1, value);

    setPassword(nextState);
    setIndex(index + 1);
  };

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>카드 비밀번호</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.InputPasswordListContainer>
          {password.map((value, index) => (
            <Controller
              name={`passwrod.${index}`}
              control={control}
              render={({ field: { onChange } }) => (
                <S.InputPasswordItemContainer>
                  <InputWrapper
                    onClick={() => {
                      handleClickInput(index);
                    }}
                  >
                    <Input
                      onChange={onChange}
                      defaultValue={value}
                      type='password'
                      textAlign='center'
                      maxLength={1}
                      readonly={true}
                    />
                  </InputWrapper>
                </S.InputPasswordItemContainer>
              )}
            />
          ))}
        </S.InputPasswordListContainer>
        <Keypad
          onClick={handleClickKeypad}
          numbers={suffle(defaultNumbers)}
          index={index}
          isOpen={isOpen}
          onClose={() => {
            close();
          }}
        />
      </InformationBody>
    </Information>
  );
};

export default InputPassword;
