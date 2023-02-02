import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const BrandCategory = () => {
  return (
    <div className="sm:mx-12 mt-1 brand-bg-wrap line-brand">
      <p className="text-lg sm:text-[1.7rem] px-4 sm:px-0 py-2 sm:w-[20%] font-semibold sm:border-b-[0.2rem] sm:border-[#FF4200]">
        Brand Asli Indonesia
      </p>
      <div className="sm:my-3 my-2">
        <Swiper
          className="sm:min-h-[240px] min-h-[110px]"
          slidesPerView={3.5}
          breakpoints={{
            600: {
              slidesPerView: 7,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
