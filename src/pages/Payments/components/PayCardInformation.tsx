import { useSelector } from 'react-redux';
import {
  Card,
  Information,
  InformationBody,
  InformationHeader,
} from '../../../components';
import CardSlider from '../../../components/CardSlider';
import { RootState } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { Controller, useFormContext } from 'react-hook-form';

const PayCardInfomation = () => {
  const navigate = useNavigate();
  const cards = useSelector((state: RootState) => state.cards);
  const { control } = useFormContext();

  return (
    <Information>
      <InformationHeader>보유카드</InformationHeader>
      <InformationBody>
        <Controller
          name='card'
          rules={{
            required: true,
          }}
          control={control}
          defaultValue={cards.length > 0 ? cards[0] : undefined}
          render={({ field: { onChange } }) =>
            cards.length === 0 ? (
              <Card clickable={true} onClick={() => navigate('/card-list')} />
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
