import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TitleText from '../TitleText';

import { CardSlider } from '~/components';
import { CreditCard, Card, CardBody, CardHeader } from '~/components';
import { RootState } from '~/store';

const PayCardInfomation = () => {
  const navigate = useNavigate();
  const cards = useSelector((state: RootState) => state.cards);
  const { control } = useFormContext();

  const clickEmptyCard = () => {
    navigate('/card-list');
  };

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
          render={({ field: { onChange } }) =>
            cards.length === 0 ? (
              <CreditCard onClick={clickEmptyCard} />
            ) : (
              <CardSlider cards={cards} onChange={onChange} />
            )
          }
        />
      </CardBody>
    </Card>
  );
};

export default PayCardInfomation;
