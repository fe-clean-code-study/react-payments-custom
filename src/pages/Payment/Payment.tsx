import styled from 'styled-components';

const Payment = () => {
  return (
    <PaymentLayout>
      <div>Pay</div>
      <div>보유카드</div>
      <div>결제금액</div>
      <div>
        <div>총 결제금액</div>
        <div>326,6000원</div>
      </div>
      <div>약관 이용 및 동의</div>
      <div>
        <div>거래정보 제공 동의: TEST</div>
        <div>
          <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
        </div>
      </div>
      <div>
        <button>결제하기</button>
        <button>취소하기</button>
      </div>
    </PaymentLayout>
  );
};

const PaymentLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 549px;
  height: 90%;
  border-radius: 15px;
  border: 1px solid #fff;
  background: #fff;
`;

export default Payment;
