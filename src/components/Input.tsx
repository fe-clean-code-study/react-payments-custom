import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value,
      placeholder,
      className,
      disabled = false,
      required = false,
      min,
      max,
      minLength,
      maxLength,
      onChange,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
      />
    );
  }
);

export default Input;
