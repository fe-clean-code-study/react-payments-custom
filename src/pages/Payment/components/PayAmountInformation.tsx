import {
  Information,
  InformationBody,
  InformationHeader,
} from '../../../components';
import * as S from '../index.style';

const PayAmountInformation = () => {
  return (
    <Information>
      <InformationHeader>
        <S.TitleText>결제 금액</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <S.PayAmountBody>
          <div>총 결제 금액</div>
          <div>323,600원</div>
        </S.PayAmountBody>
      </InformationBody>
    </Information>
  );
};

export default PayAmountInformation;
