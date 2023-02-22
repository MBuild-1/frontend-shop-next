import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import DefaultThumb from '../../../images/default-news.jpg';

const News = ({ news }) => {
  return (
    <div className="lg:my-6 mt-1">
      <Swiper
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="homeCarousel"
      >
        {news.map(({ thumbnail, slug }, x) => (
          <SwiperSlide key={x}>
            <Link
              href={`/news/${slug}`}
              passHref
              className="flex w-full lg:h-[400px] h-[230px]"
            >
              <Image
                src={
                  thumbnail
                    ? process.env.NEXT_PUBLIC_API_STORAGE_URL +
                      '/' +
                      thumbnail.replace('public/', '')
                    : DefaultThumb
                }
                fill
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
