import { MouseEvent, useState } from 'react';
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
  const { control, setValue, getFieldState, formState } = useFormContext();
  const { isOpen, open, close } = useModal(false);
  const { invalid } = getFieldState('password', formState);

  const handleClickKeypad = (value: string) => {
    setValue(`password.${index}`, value, { shouldValidate: true });
    setIndex(index + 1);
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
          {[...new Array(2).fill(null)].map((_, index) => (
            <S.InputPasswordItemContainer data-index={index}>
              <InputWrapper isInvalidation={invalid}>
                <Controller
                  name={`password.${index}`}
                  control={control}
                  rules={{
                    required: true,
                    validate: (value) =>
                      value !== undefined && value.length === 1,
                  }}
                  render={({ field: { value, onChange, ref } }) => (
                    <Input
                      ref={ref}
                      value={value}
                      onChange={onChange}
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
