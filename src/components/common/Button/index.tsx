import "./style.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "basic" | "circle";
}

const Button = ({
  variant = "basic",
  children,
  className,
  style,
  ...props
}: ButtonProps) => {
  const baseStyle: React.CSSProperties = {
    fontSize: "1rem",
    cursor: props.disabled ? "not-allowed" : "pointer",
    ...style,
  };

  return (
    <button
      className={`button-${variant} ${className}`}
      style={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
