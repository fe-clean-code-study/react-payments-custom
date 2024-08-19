import * as S from './PasswordField.style';

const EmptyPassword = () => {
  return (
    <>
      <S.EmptyInput styleType='ghost' type={'password'} value={'.'} readOnly />
      <S.EmptyInput styleType='ghost' type={'password'} value={'.'} readOnly />
    </>
  );
};

export default EmptyPassword;
