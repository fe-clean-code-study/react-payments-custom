import "./style.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "basic" | "circle";
}

export default function Button({
  variant = "basic",
  children,
  className,
  style,
  ...props
}: ButtonProps) {
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
}
