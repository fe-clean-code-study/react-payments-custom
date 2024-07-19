import {
  Information,
  InformationBody,
  InformationHeader,
} from '../../../components';

const PayTermInfomation = () => {
  return (
    <Information>
      <InformationHeader>약관 이용 및 동의</InformationHeader>
      <InformationBody>
        <div>거래정보 제공 동의:NEXTSTEP</div>
        <div>상세보기</div>
        <div>주문 내용을 확인하였으며 정보 제공 등에 동의합니다.</div>
        <input type='radio' />
      </InformationBody>
    </Information>
  );
};

export default PayTermInfomation;
