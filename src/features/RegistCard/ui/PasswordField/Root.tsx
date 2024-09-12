import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import EmptyPassword from './EmptyPassword';
import KeypadDrawer from './KeypadDrawer';
import * as S from './PasswordField.style';

import { cardRegsitFormValidate, validateHelper } from '~/features/utils';
import { useDisclosure } from '~/shared/hooks';
import { Drawer, Field } from '~/shared/ui';

const Root = () => {
  const { isOpen, close, open } = useDisclosure();
  const { control, getFieldState, formState, setValue, trigger } =
    useFormContext();
  const names = ['password.0', 'password.1'];
  const [passwordIndex, setPasswordIndex] = useState(0);

  const handleClickKeypad = (number: string) => {
    setValue(`password.${passwordIndex}`, number, {
      shouldValidate: true,
    });
    setPasswordIndex(passwordIndex + 1);

    if (passwordIndex === 1) {
      close();
    }
  };

  return (
    <Field.Root>
      <Field.Label>비밀번호</Field.Label>
      <S.InputContainer>
        <Drawer.Root
          onOpen={open}
          onClose={() => {
            close();
            trigger(`password.${passwordIndex}`);
          }}
        >
          <Drawer.Trigger>
            <S.TriggerInputContainer>
              {names.map((name, index) => (
                <Controller
                  key={`controller-${index}`}
                  name={name}
                  control={control}
                  rules={{
                    validate: (value) =>
                      validateHelper(cardRegsitFormValidate['password'], value),
                  }}
                  render={({ field: { value } }) => (
                    <S.Input
                      type='password'
                      value={value}
                      maxLength={1}
                      onClick={() => {
                        setPasswordIndex(index);
                      }}
                      readOnly
                    />
                  )}
                />
              ))}
            </S.TriggerInputContainer>
          </Drawer.Trigger>
          {isOpen && (
            <>
              <Drawer.Overlay />
              <Drawer.Content>
                <KeypadDrawer onClick={handleClickKeypad} />
              </Drawer.Content>
            </>
          )}
        </Drawer.Root>
        <EmptyPassword />
      </S.InputContainer>
      <Field.ErrorText
        isShow={getFieldState('password', formState).error !== undefined}
      >
        카드 비밀번호 앞자리 2자리를 입력해주세요.
      </Field.ErrorText>
    </Field.Root>
  );
};

export default Root;
