import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './index.style';
import CreditCard from '../CreditCard';

import { RegisteredCard } from '~/types';

interface CardSliderProps {
  cards: RegisteredCard[];
  onChange?: (value: RegisteredCard) => void;
}

const CardSlider = ({ cards, onChange }: CardSliderProps) => {
  const navigate = useNavigate();
  const settings = {
    centerMode: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      onChange && onChange(cards[index]);
    },
  };
  const handleClickAddCard = () => {
    navigate('/card-list');
  };

  useEffect(() => {
    onChange && onChange(cards[0]);
  }, [onChange, cards]);

  return (
    <S.SlideWrapper>
      <Slider {...settings}>
        {cards.map((card) => (
          <S.ItemWrapper key={card.id}>
            <CreditCard {...card} />
          </S.ItemWrapper>
        ))}
        <S.ItemWrapper>
          <CreditCard company='none' onClick={handleClickAddCard} />
        </S.ItemWrapper>
      </Slider>
    </S.SlideWrapper>
  );
};

export default CardSlider;
