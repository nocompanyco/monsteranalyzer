// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import slides from './slides-data';

// Import Swiper styles
import 'swiper/swiper.scss';
import './swiper.styles.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperText = ({hidden}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id} className={hidden? 'SwiperSlideCustomized': null}>
            {slide.text}
            <span id="subText">{slide.subText}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperText;
