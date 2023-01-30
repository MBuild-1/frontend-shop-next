import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
// import '../../styles/styles.css';
// import required modules
import { Autoplay, Navigation } from 'swiper';

export function HomeCarousel() {
  return (
    <div className="mx-12 mb-2 mt-20">
      <Swiper
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg"
              alt="content-1"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.43.58%20AM.jpeg"
              alt="content-2"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
