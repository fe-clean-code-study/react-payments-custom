interface ButtonProps {
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  type = "button",
  disabled = false,
  children,
  onClick,
  className,
  style,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={className}
      style={{
        border: "none",
        margin: 0,
        padding: 0,
        backgroundColor: "transparent",
        cursor: "pointer",
        fontSize: "1rem",
        ...style,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
