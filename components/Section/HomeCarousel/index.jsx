import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';

import Banner1 from '../../../images/banners/banner-web-1.png';
import Banner2 from '../../../images/banners/banner-web-2.png';
import Banner3 from '../../../images/banners/banner-web-3.png';
import Banner4 from '../../../images/banners/banner-web-4.png';

export const HomeCarousel = () => {
  return (
    <div className="sm:mb-4 mt-[8.4rem] lg:mt-[4.5rem]">
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={'#'} passHref>
            <Image
              className="border-6 border-white"
              src={Banner1}
              alt={'Banner-1'}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <Image
              className="border-6 border-white"
              src={Banner2}
              alt={'Banner-1'}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <Image
              className="border-6 border-white"
              src={Banner3}
              alt={'Banner-1'}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <Image
              className="border-6 border-white"
              src={Banner4}
              alt={'Banner-1'}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
