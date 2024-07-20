import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './index.style';
import { useState } from 'react';
import Card from '../Card';

const CardSlider = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [card, setCard] = useState();

  return (
    <S.SlideWrapper className='slide-container'>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Slider>
    </S.SlideWrapper>
  );
};

export default CardSlider;
