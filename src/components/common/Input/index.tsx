import { forwardRef } from "react";
import "./style.css";

export interface InputProps {
  variant?: "basic" | "underline";
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & React.ComponentPropsWithRef<"input">
>(({ variant = "basic", className, ...props }, ref) => {
  return (
    <input className={`input-${variant} ${className}`} ref={ref} {...props} />
  );
});

export default Input;
