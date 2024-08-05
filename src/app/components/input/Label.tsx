import React from "react";
import {SlotComponentProps} from "../../types/componentTypes.ts";

const Label = React.forwardRef(({ className = '', children, ...props }:SlotComponentProps<HTMLSpanElement>, ref) => {
  return (
    <span ref={ref} className={`input-title ${className}`} {...props}>
      {children}
    </span>
  )
})

export default Label