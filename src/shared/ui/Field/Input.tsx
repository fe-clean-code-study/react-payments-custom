import { ChangeEvent, ComponentProps, forwardRef } from 'react';

import * as S from './Field.style';

export interface InputProps extends ComponentProps<'input'> {
  onComplete?: (event?: ChangeEvent<HTMLInputElement>) => void;
  styleType?: 'fill' | 'outline' | 'flushed' | 'ghost';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ styleType = 'fill', onComplete, onChange, ...props }, ref) => {
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { maxLength } = props;
      const { value } = event.target;
      const maxLengthNumber = Number(maxLength);

      if (isNaN(maxLengthNumber) === true) {
        return;
      }

      if (value.length === maxLengthNumber) {
        onComplete && onComplete(event);
      }
      onChange && onChange(event);
    };

    return (
      <S.Input
        styleType={styleType}
        ref={ref}
        onChange={handleChangeInput}
        {...props}
      />
    );
  },
);

export default Input;
