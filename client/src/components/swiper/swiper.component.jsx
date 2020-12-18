// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import './swiper.styles.css';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const SwiperText = () => {
  const slides = [
    {
      id: 1,
      text: 'Welcome To Monster Analyzer',
      subText: 'Anaylze your Network',
    },
    {
      id: 1,
      text: 'Select Your Network \n',
      subText: 'Set Your Network to get the required information',
    },
    {
      id: 2,
      text: 'Customize Your Network \n',
      subText: 'Edit your network to get the proper reports',
    },
    {
      id: 3,
      text: 'Find your hosts \n',
      subText:
        'Find information on hosts, computers, phones found on your local network',
    },
  ];
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            {slide.text}
            <span id="subText">{slide.subText}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperText;
