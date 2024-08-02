import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react';

import * as S from './index.style';

export interface InputProps extends ComponentProps<'input'> {
  onComplete?: (target?: HTMLInputElement) => void;
  textAlign?: 'center' | 'left';
  onlyNumber?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onComplete,
      onChange,
      defaultValue,
      onlyNumber = false,
      textAlign = 'left',
      ...props
    },
    ref,
  ) => {
    const [value, setState] = useState<
      string | number | readonly string[] | undefined
    >(defaultValue);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { target } = event;

      if (target instanceof HTMLInputElement) {
        const { maxLength } = target;
        const newValue = event.target.value;

        if (onlyNumber && isNaN(Number(newValue))) {
          return;
        }
        if (!onlyNumber || (onlyNumber && !isNaN(Number(newValue)))) {
          onChange && onChange(event);
          setState(newValue);
        }
        if (maxLength === newValue.length) {
          onComplete && onComplete(event.target);
        }
      }
    };

    return (
      <S.Input
        ref={ref}
        textAlign={textAlign}
        value={value}
        onChange={(event) => {
          handleChangeInput(event);
        }}
        {...props}
        autoComplete='new-password'
      />
    );
  },
);

export default Input;
