import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const ViralCategory = () => {
  return (
    <div className="mx-12 my-4 viral-bg-wrap">
      <div className="flex justify-between py-2 px-4">
        <p className="text-[2rem] text-stone-700 font-semibold">
          Yang Lagi Viral Di Indonesia
        </p>
        <button
          type="button"
          className="text-stone-700 hover:text-black border-[3px] border-stone-700 font-bold rounded text-[1rem] px-7 py-[5px] text-center mr-2 mb-2 hover:bg-white hover:border-x-[#FF4200] hover:border-t-[#25258C] hover:border-b-[#00A9EA]"
        >
          Lihat Semua
        </button>
      </div>
      <div className="my-3">
        <Swiper slidesPerView={5} navigation={true} modules={[Navigation]}>
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
