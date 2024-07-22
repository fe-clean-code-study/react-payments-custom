import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react';
import * as S from './index.style';

interface InputProps {
  onChange?: (value: string) => void;
  onComplete?: () => void;
  defaultValue?: string;
  maxLength?: number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  textAlign?: 'center' | 'left';
  onlyNumber?: boolean;
  readonly?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      onComplete,
      defaultValue = '',
      maxLength,
      onlyNumber = false,
      textAlign = 'left',
      placeholder = '',
      type = 'text',
      readonly = false,
    },
    ref,
  ) => {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (onlyNumber && /^\d*$/.test(newValue)) {
        setValue(newValue);
        onChange && onChange(newValue);
      } else {
        setValue(newValue);
        onChange && onChange(newValue);
      }
      if (maxLength && maxLength === newValue.length) {
        onComplete && onComplete();
      }
    };

    return (
      <S.Input
        ref={ref}
        textAlign={textAlign}
        maxLength={maxLength}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readonly}
        autoComplete='new-password'
      />
    );
  },
);

export default Input;
