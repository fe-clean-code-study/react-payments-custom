import { forwardRef } from "react";
import "./style.css";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  variant?: "basic" | "underline";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "basic", ...props }, ref) => {
    return (
      <input data-scope="input" data-part={variant} ref={ref} {...props} />
    );
  }
);

export default Input;
