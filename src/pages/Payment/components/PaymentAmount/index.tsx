import * as S from './index.style';
import TitleText from '../TitleText';

import { Information, InformationBody, InformationHeader } from '~/components';

interface PaymentAmountProps {
  amount: string;
}

const PaymentAmount = ({ amount }: PaymentAmountProps) => {
  return (
    <Information>
      <InformationHeader>
        <TitleText label={'결제 금액'} />
      </InformationHeader>
      <InformationBody>
        <S.PayAmountBody>
          <div>총 결제 금액</div>
          <div>{amount}원</div>
        </S.PayAmountBody>
      </InformationBody>
    </Information>
  );
};

export default PaymentAmount;
