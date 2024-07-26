import * as S from './index.style';

import { Input } from '~/components';

const ReadonlyPassword = () => {
  return (
    <>
      <S.InputPasswordItemContainer>
        <Input readOnly={true} textAlign='center' type='password' value={'1'} />
      </S.InputPasswordItemContainer>
      <S.InputPasswordItemContainer>
        <Input readOnly={true} textAlign='center' type='password' value={'1'} />
      </S.InputPasswordItemContainer>
    </>
  );
};

export default ReadonlyPassword;
