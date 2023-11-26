import React, { useState } from 'react'
import styles from './carousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Swiper as SwiperType} from 'swiper';
import { Autoplay } from "swiper/modules";
import { ArrowBackIosNewSharp, ArrowForwardIosSharp } from '@mui/icons-material';

interface CarouselParams {
  slices: React.ReactNode[];
  slidesPerView?: number;
  dotsStyle?: 'Below' | 'Inside';
  haveArrows?: boolean;
}

const Carousel = ({ 
  slices, 
  slidesPerView = 1, 
  dotsStyle='Below', 
  haveArrows=false 
}: CarouselParams) => {

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [swiperIndex, setSwiperIndex ] = useState<number>(0);

  const dots: number[] = [];
  const totalDots = slices.length - slidesPerView + 1;

  for (let i = 0; i < totalDots; i++) dots.push(i);

  const goNext = (number: number) => {
    swiper?.slideTo(swiperIndex+number);
  }

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        onSwiper={setSwiper}
        initialSlide={swiperIndex}
        onSlideChange={swiper => setSwiperIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        autoplay={{delay: 4000}}
      >
        {slices.map((slice, i) => (
          <SwiperSlide key={i}>
            {slice}
          </SwiperSlide>
        ))}
      </Swiper>

      {haveArrows && (
        <div className={styles.arrows}>
          <button className={styles.prev} onClick={() => goNext(-1)}>
            <ArrowBackIosNewSharp />
          </button>
          <button className={styles.next} onClick={() => goNext(+1)}>
            <ArrowForwardIosSharp />
          </button>
        </div>
      )}

      <div className={`${styles.dotsContainer} ${styles['dots'+dotsStyle]}`}>
        {dots.map((dot, i) => (
          <div 
            key={dot} 
            className={styles.dotHitbox}
            onClick={() => swiper?.slideTo(i)}
          >
            <div
              className={`
                ${swiperIndex === i ? styles.active : ''} 
                ${styles.dot}
              `}
            ></div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Carousel