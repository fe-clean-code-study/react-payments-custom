interface PrevIconProps {
  onClick?: () => void;
}

const PrevIcon = ({ onClick }: PrevIconProps) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <span onClick={handleClick} className='material-symbols-outlined'>
      arrow_back
    </span>
  );
};

export default PrevIcon;
