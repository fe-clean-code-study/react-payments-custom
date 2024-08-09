import {
  ChangeEvent,
  ComponentProps,
  CSSProperties,
  forwardRef,
  useEffect,
  useState,
} from 'react';

export interface InputProps extends ComponentProps<'input'> {
  onComplete?: (event?: ChangeEvent<HTMLInputElement>) => void;
  onlyNumber?: boolean;
  style?: CSSProperties;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ style, onComplete, onlyNumber, ...props }, ref) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { onChange, maxLength } = props;
      const { value } = event.target;
      const maxLengthNumber = Number(maxLength);

      if (onlyNumber === true && isNaN(Number(value))) {
        return;
      }
      if (isNaN(maxLengthNumber) === false) {
        if (value.length === maxLengthNumber) {
          onComplete && onComplete(event);
        }
        if (value.length > maxLengthNumber) {
          return;
        }
      }
      onChange && onChange(event);
      setValue(event.target.value);
    };

    return (
      <input
        style={{
          padding: '10px',
          borderRadius: '5px',
          outline: 'none',
          border: '1px solid #eee',
          ...style,
        }}
        ref={ref}
        value={value}
        onChange={handleChangeInput}
        {...props}
      />
    );
  },
);

export default Input;