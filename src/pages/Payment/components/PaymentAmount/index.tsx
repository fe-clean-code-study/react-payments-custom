import * as S from './index.style';
import TitleText from '../TitleText';

import { Card, CardBody, CardHeader } from '~/components';

interface PaymentAmountProps {
  amount: string;
}

const PaymentAmount = ({ amount }: PaymentAmountProps) => {
  return (
    <Card>
      <CardHeader>
        <TitleText label={'결제 금액'} />
      </CardHeader>
      <CardBody>
        <S.PayAmountBody>
          <div>총 결제 금액</div>
          <div>{amount}원</div>
        </S.PayAmountBody>
      </CardBody>
    </Card>
  );
};

export default PaymentAmount;
