import "./style.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "basic" | "circle";
}

const Button = ({
  variant = "basic",
  children,
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
      data-scope="button"
      data-part={variant}
      style={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
