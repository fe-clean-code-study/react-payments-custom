import { FormProvider, useForm } from 'react-hook-form';
import {
  ModalHeader,
  ModalBody,
  Information,
  InformationHeader,
  InformationBody,
} from '../../components';

const Payments = () => {
  const methods = useForm();

  return (
    <>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <FormProvider {...methods}>
          <Information>
            <InformationHeader>보유카드</InformationHeader>
            <InformationBody>{/* <InputCard /> */}</InformationBody>
          </Information>
          <Information>
            <InformationHeader>결제 금액</InformationHeader>
            <InformationBody>
              <div>총 결제 금액</div>
              <div>323,600원</div>
            </InformationBody>
          </Information>
          <Information>
            <InformationHeader>약관 이용 및 동의</InformationHeader>
            <InformationBody>
              <div>거래정보 제공 동의:NEXTSTEP</div>
              <div>상세보기</div>
              <div>주문 내용을 확인하였으며 정보 제공 등에 동의합니다.</div>
              <input type='radio' />
            </InformationBody>
          </Information>
        </FormProvider>
      </ModalBody>
    </>
  );
};

export default Payments;
