import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import CardInfoProvider from './providers/CardInfoProvider';
import {
  CardNumbersForm,
  CardOwnerNameForm,
  CardPasswordForm,
  CardSecureNumberForm,
  CardValidDateForm,
} from './components';

interface CardCreateFormProps {
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  cardInfo: CardInfo;
}

const CardCreateForm = ({ cardInfo, setCardInfo }: CardCreateFormProps) => {
  return (
    <CardInfoProvider setCardInfo={setCardInfo} cardInfo={cardInfo}>
      <CardCreateFormLayout>
        <CardNumbersForm />
        <CardValidDateForm />
        <CardOwnerNameForm />
        <CardSecureNumberForm />
        <CardPasswordForm />
      </CardCreateFormLayout>
    </CardInfoProvider>
  );
};

const CardCreateFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default CardCreateForm;
