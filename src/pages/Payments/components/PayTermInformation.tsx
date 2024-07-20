import { useFormContext } from 'react-hook-form';
import {
  Information,
  InformationBody,
  InformationHeader,
} from '../../../components';
import * as S from '../index.style';

const PayTermInfomation = () => {
  const { register } = useFormContext();

  return (
    <Information>
      <InformationHeader>약관 이용 및 동의</InformationHeader>
      <InformationBody>
        <S.TermInformationTop>
          <div>거래정보 제공 동의:</div>
          <div>NEXTSTEP</div>
          <div>상세보기</div>
        </S.TermInformationTop>
        <S.TermInformationBottom>
          <div>주문 내용을 확인하였으며 정보 제공 등에 동의합니다.</div>
          <input
            type='checkbox'
            {...register('checkTerm', {
              required: true,
            })}
          />
        </S.TermInformationBottom>
      </InformationBody>
    </Information>
  );
};

export default PayTermInfomation;
