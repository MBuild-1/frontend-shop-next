import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import DefaultThumb from '../../../images/default-news.jpg';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/v1/web/news');

      const data = await res.data.data;

      setNews(data);
    };

    getData();
  }, []);

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
            <Link href={`/news/${slug}`} passHref>
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
