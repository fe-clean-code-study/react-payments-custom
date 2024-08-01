interface ValidationMessageProps {
  isValid: () => boolean;
  errorMessage: string;
  showOnBlur: boolean;
}

const ValidationMessage = ({
  isValid,
  errorMessage,
  showOnBlur,
}: ValidationMessageProps) => {
  return (
    <div style={{ height: "10px", paddingTop: "5px" }}>
      {showOnBlur && isValid() && (
        <span className="input-title error-vibrate" style={{ color: "red" }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default ValidationMessage;
