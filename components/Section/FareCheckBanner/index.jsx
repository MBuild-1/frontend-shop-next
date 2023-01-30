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
import { Autoplay } from 'swiper';

export function FareCheckBanner() {
  return (
    <div className="mx-12 my-2 relative">
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/frontend/img/banner/promoAustralia.png"
              alt="promoAustralia"
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
              src="http://masterbagasi.com:8081/frontend/img/banner/promoEropa.png"
              alt="promoEropa"
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
              src="http://masterbagasi.com:8081/frontend/img/banner/promoUK.png"
              alt="promoUK"
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
              src="http://masterbagasi.com:8081/frontend/img/banner/promoUSA.png"
              alt="promoUSA"
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
      <button
        type="button"
        className="banner-btn font-bold hover:text-stone-700"
      >
        Cek Tarif Ke Negara Lainnya
      </button>
    </div>
  );
}
