import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import * as S from './Field.style';

export interface InputProps extends ComponentProps<'input'> {
  styleType?: 'fill' | 'outline' | 'flushed' | 'ghost';
  onlyNumber?: boolean;
  onComplete?: (event?: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      styleType = 'fill',
      onlyNumber = false,
      value,
      onComplete,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<
      string | number | readonly string[] | undefined
    >();

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const changeValue = (
      value: string,
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      const { maxLength } = props;
      const maxLengthNumber = Number(maxLength);

      setInputValue(value);
      onChange && onChange(event);

      if (value.length === maxLengthNumber) {
        onComplete && onComplete(event);
      }
    };

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (onlyNumber) {
        const onlyNumberValue = value.replace(/[^0-9]/g, '');

        changeValue(onlyNumberValue, event);
        return;
      }

      changeValue(value, event);
    };

    return (
      <S.Input
        styleType={styleType}
        ref={ref}
        value={inputValue}
        onChange={handleChangeInput}
        {...props}
      />
    );
  },
);

export default Input;
