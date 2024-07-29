import { useFormContext } from 'react-hook-form';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader } from '~/components';

const TermAgreement = () => {
  const { register } = useFormContext();

  return (
    <Card>
      <CardHeader>
        <TitleText label={'약관 이용 및 동의'} />
      </CardHeader>
      <CardBody>
        <S.TermCardTop>
          <div>거래정보 제공 동의:</div>
          <div>NEXTSTEP</div>
          <div>상세보기</div>
        </S.TermCardTop>
        <S.TermCardBottom>
          <div>주문 내용을 확인하였으며 정보 제공 등에 동의합니다.</div>
          <input
            type='checkbox'
            {...register('checkTerm', {
              validate: (value) => value === true,
            })}
          />
        </S.TermCardBottom>
      </CardBody>
    </Card>
  );
};

export default TermAgreement;
