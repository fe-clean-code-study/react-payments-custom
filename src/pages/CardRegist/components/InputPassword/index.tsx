import { MouseEvent, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import * as S from './index.style';
import KeypadModal from './KeypadModal';
import ReadonlyPassword from './ReadonlyPassword';
import TitleText from '../TitleText';

import {
  Information,
  InformationBody,
  InformationHeader,
  Input,
  InputWrapper,
} from '~/components';
import { useModal } from '~/hooks';

const InputPassword = () => {
  const [index, setIndex] = useState(0);
  const { control } = useFormContext();
  const { isOpen, open, close } = useModal(false);
  const inputRefArray = useRef<(HTMLInputElement | null)[]>([null, null]);

  const handleClickKeypad = (value: string) => {
    if (inputRefArray.current[index]) {
      inputRefArray.current[index].value = value;
      setIndex(index + 1);
    }
    if (index === 1) {
      close();
    }
  };

  const handleClickInput = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    const { target } = event;
    const $container = target.closest('[data-index]');

    if (!($container instanceof HTMLElement)) return;
    if ($container.dataset.index === undefined) return;

    const index = $container.dataset.index;
    setIndex(Number(index));
    open();
  };

  return (
    <Information>
      <InformationHeader>
        <TitleText label={'카드 비밀번호'} />
      </InformationHeader>
      <InformationBody>
        <S.InputPasswordListContainer onClick={handleClickInput}>
          {inputRefArray.current.map((_, index) => (
            <S.InputPasswordItemContainer data-index={index}>
              <InputWrapper>
                <Controller
                  name={`password.${index}`}
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) => value.length === 1,
                  }}
                  render={({ field: { value, onChange } }) => (
                    <Input
                      ref={(element) => {
                        if (element instanceof HTMLInputElement) {
                          inputRefArray.current[index] = element;
                        }
                      }}
                      onChange={onChange}
                      defaultValue={value}
                      type='password'
                      textAlign='center'
                      maxLength={1}
                      readOnly={true}
                    />
                  )}
                />
              </InputWrapper>
            </S.InputPasswordItemContainer>
          ))}
          <ReadonlyPassword />
          <KeypadModal
            onSelect={handleClickKeypad}
            isOpen={isOpen}
            close={close}
          />
        </S.InputPasswordListContainer>
      </InformationBody>
    </Information>
  );
};

export default InputPassword;
