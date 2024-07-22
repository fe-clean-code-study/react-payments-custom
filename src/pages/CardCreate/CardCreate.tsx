import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { useState } from 'react';
import { CardCreateForm } from './components/CardCreateForm';

const CardCreate = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    name: '',
    numbers: [[], [], [], []],
    ownerName: '',
    validMonth: '',
    validYear: '',
  });

  return (
    <CardCreateLayout>
      <Header>카드 추가</Header>
      <CardBox>
        <Card cardInfo={cardInfo} />
      </CardBox>
      <CardCreateForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
    </CardCreateLayout>
  );
};

const CardCreateLayout = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid #fff;
  background: #fff;
  width: 375px;
  height: 90%;
  gap: 20px;
  padding: 30px;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export default CardCreate;
