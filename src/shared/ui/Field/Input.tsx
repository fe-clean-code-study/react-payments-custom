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
      value = '',
      onComplete,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<
      string | number | readonly string[] | undefined
    >(value);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const { maxLength } = props;
      const maxLengthNumber = Number(maxLength);

      if (onlyNumber && isNaN(Number(value))) {
        setInputValue('');
        return;
      }

      setInputValue(value);
      onChange && onChange(event);

      if (value.length === maxLengthNumber) {
        onComplete && onComplete(event);
      }
    };

    return (
      <S.Input
        {...props}
        styleType={styleType}
        ref={ref}
        value={inputValue}
        onChange={handleChangeInput}
      />
    );
  },
);

export default Input;
