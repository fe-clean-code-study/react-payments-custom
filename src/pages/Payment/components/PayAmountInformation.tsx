import TitleText from './TitleText';
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
        <TitleText label={'결제 금액'} />
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
