import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const News = () => {
  return (
    <div className="sm:w-[50%] sm:my-6 mt-1 sm:pr-2">
      <Swiper
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img src="http://masterbagasi.com:8081/image/uploads/news/202212101245b0312c21f9e7df84b1a7280e8f1741cd.jpg" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img src="http://masterbagasi.com:8081/image/uploads/news/2022121013043d350cc1a3b7dbbc61375e7943932add.jpg" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default News;
