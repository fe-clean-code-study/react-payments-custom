import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './index.style';
import { MyCard } from '../../types';
import Card from '../Card';

interface CardSliderProps {
  cards: MyCard[];
  onChange?: (value: MyCard) => void;
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
        {cards.map((card, index) => (
          <S.ItemWrapper key={index}>
            <Card {...card} />
          </S.ItemWrapper>
        ))}
        <S.ItemWrapper>
          <Card company='none' onClick={handleClickAddCard} />
        </S.ItemWrapper>
      </Slider>
    </S.SlideWrapper>
  );
};

export default CardSlider;
