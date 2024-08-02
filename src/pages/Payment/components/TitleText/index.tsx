import * as S from './index.style';

interface TitleTextProps {
  label: string;
}

const TitleText = ({ label }: TitleTextProps) => {
  return <S.TitleText>{label}</S.TitleText>;
};

export default TitleText;
