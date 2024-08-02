import { PropsWithChildren, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './index.style';

export interface SlideProps extends PropsWithChildren {
  onChange?: (index: number) => void;
}

const Slide = ({ onChange, children }: SlideProps) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => {
      onChange && onChange(index);
    },
  };

  useEffect(() => {
    onChange && onChange(0);
  }, [onChange]);

  return (
    <S.SlideWrapper>
      <Slider {...settings}>{children}</Slider>
    </S.SlideWrapper>
  );
};

export default Slide;
