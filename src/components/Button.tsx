interface ButtonProps {
  onClick?: (...props: any[]) => void;
  label?: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  const handleClickButton = () => {
    onClick && onClick();
  };

  return (
    <button className='button-box' onClick={handleClickButton}>
      <span className='button-text'>{label}</span>
    </button>
  );
};

export default Button;
