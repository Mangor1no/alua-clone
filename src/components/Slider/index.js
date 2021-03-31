import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'constants/style.css';

SwiperCore.use([Autoplay]);

const ImageSwiper = ({ images, autoplay, loop, spaceBetween, hasOverlay }) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={autoplay}
      loop={loop}
      spaceBetween={spaceBetween}
      autoHeight
    >
      {images.map((image, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={key} className="relative flex items-center">
          {hasOverlay && <div className="overlay" />}
          <img src={image} alt="slide-img" className="w-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ImageSwiper;
