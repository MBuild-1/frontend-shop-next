import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const BrandCategory = () => {
  return (
    <div className="mx-12 my-4 line-brand">
      <p className="text-[1.7rem] py-2 w-[20%] font-semibold border-b-[0.2rem] border-[#FF4200]">
        Brand Asli Indonesia
      </p>
      <div className="my-3">
        <Swiper slidesPerView={7} navigation={true} modules={[Navigation]}>
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
