import {
  Information,
  InformationBody,
  InformationHeader,
} from '../../../components';

const PayAmountInformation = () => {
  return (
    <Information>
      <InformationHeader>결제 금액</InformationHeader>
      <InformationBody>
        <div>총 결제 금액</div>
        <div>323,600원</div>
      </InformationBody>
    </Information>
  );
};

export default PayAmountInformation;
