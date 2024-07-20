import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './index.style';
import Card from '../Card';
import { useNavigate } from 'react-router-dom';
import { MyCard } from '../../types';

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
    beforeChange: (index: number) => {
      onChange && onChange(cards[index]);
    },
  };

  return (
    <S.SlideWrapper>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        {cards.map((card, index) => (
          <S.ItemWrapper key={index}>
            <Card {...card} />
          </S.ItemWrapper>
        ))}
        <S.LastItemWrapper onClick={() => navigate('/card-list')}>
          <Card />
        </S.LastItemWrapper>
      </Slider>
    </S.SlideWrapper>
  );
};

export default CardSlider;
