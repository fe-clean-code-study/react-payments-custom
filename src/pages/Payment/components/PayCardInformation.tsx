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
import * as S from '../index.style';

const PayCardInfomation = () => {
  const navigate = useNavigate();
  const cards = useSelector((state: RootState) => state.cards);
  const { control } = useFormContext();

  return (
    <Information>
      <InformationHeader>
        <S.TitleText>보유카드</S.TitleText>
      </InformationHeader>
      <InformationBody>
        <Controller
          name='card'
          rules={{
            required: true,
            validate: (value) => value !== undefined,
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
