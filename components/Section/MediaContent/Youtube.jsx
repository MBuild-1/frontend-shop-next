import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Youtube = ({ video }) => {
  return (
    <div className="lg:my-6 mb-3">
      <Swiper
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="homeCarousel"
      >
        {video.map(({ title, url }, x) => (
          <SwiperSlide key={x}>
            <Link
              href={'#'}
              passHref
              className="flex w-full lg:h-[400px] h-[230px]"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${url}`}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Youtube;
