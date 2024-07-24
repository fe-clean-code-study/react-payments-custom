import { Controller, useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TitleText from '../TitleText';

import { CardSlider } from '~/components';
import {
  Card,
  Information,
  InformationBody,
  InformationHeader,
} from '~/components';
import { RootState } from '~/store';

const PayCardInfomation = () => {
  const navigate = useNavigate();
  const cards = useSelector((state: RootState) => state.cards);
  const { control } = useFormContext();

  const clickEmptyCard = () => {
    navigate('/card-list');
  };

  return (
    <Information>
      <InformationHeader>
        <TitleText label='보유 카드' />
      </InformationHeader>
      <InformationBody>
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
              <Card clickable={true} onClick={clickEmptyCard} />
            ) : (
              <CardSlider cards={cards} onChange={onChange} />
            )
          }
        />
      </InformationBody>
    </Information>
  );
};

export default PayCardInfomation;
