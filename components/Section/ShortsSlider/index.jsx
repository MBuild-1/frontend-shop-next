import Link from 'next/link';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ShortsSlider = ({ shorts }) => {
  return (
    <div className="relative sm:my-4 my-2 sm:mx-12 py-4 sm:h-[580px] h-[300px] bg-[#eaeaea] reels">
      <div className="reels-section relative"></div>
      <div className="reels-card">
        <Swiper
          slidesPerView={2.5}
          breakpoints={{
            600: {
              slidesPerView: 4,
            },
          }}
          navigation={true}
          loop={true}
          modules={[Navigation]}
        >
          {shorts.map(({ title, url }, x) => (
            <SwiperSlide key={x}>
              <Link href={'#'} passHref>
                <iframe
                  className="rounded-md sm:w-[15rem] sm:h-[30rem] w-[7rem] h-[15rem] mx-[1.1rem]"
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
    </div>
  );
};
