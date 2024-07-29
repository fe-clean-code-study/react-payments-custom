import { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as S from './index.style';
import TitleText from '../TitleText';

import { Slide } from '~/components';
import {
  CreditCard,
  Card,
  CardBody,
  CardHeader,
  AddCreditCard,
} from '~/components';
import { RootState } from '~/store';

const PayCardInfomation = () => {
  const navigate = useNavigate();
  const cards = useSelector((state: RootState) => state.cards);
  const { control, setValue } = useFormContext();

  const clickEmptyCard = () => {
    navigate('/card-list');
  };

  const handleChangeSlide = useCallback(
    (index: number) => {
      setValue('card', cards[index], { shouldValidate: true });
    },
    [setValue, cards],
  );

  return (
    <Card>
      <CardHeader>
        <TitleText label='보유 카드' />
      </CardHeader>
      <CardBody>
        <Controller
          name='card'
          control={control}
          defaultValue={cards.length > 0 ? cards[0] : undefined}
          rules={{
            required: true,
            validate: (value) => value !== undefined,
          }}
          render={() =>
            cards.length === 0 ? (
              <AddCreditCard onClick={clickEmptyCard} />
            ) : (
              <Slide onChange={handleChangeSlide}>
                {cards.map((card) => (
                  <S.CardItemContainer>
                    <CreditCard key={card.id} {...card} />
                  </S.CardItemContainer>
                ))}
                <S.CardItemContainer>
                  <AddCreditCard onClick={clickEmptyCard} />
                </S.CardItemContainer>
              </Slide>
            )
          }
        />
      </CardBody>
    </Card>
  );
};

export default PayCardInfomation;
