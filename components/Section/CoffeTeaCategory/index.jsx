import CardProduct from '@/components/CardProduct';
import Link from 'next/link';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CoffeTeaCategory = ({ productCT }) => {
  return (
    <div className="sm:mx-12 my-2 ct-bg-wrap">
      <div className="flex justify-between pt-3 pl-5 sm:py-2 sm:px-4">
        <p className="sm:text-[2rem] sm:pl-4 text-white font-semibold">
          Kopi & Teh Asli Indonesia
        </p>
        <Link
          type="button"
          href={'/product/coffeetea'}
          className="text-white font-bold text-sm sm:text-[1.3rem] px-7 py-[10px] text-center sm:mr-2 mb-3 sm:mb-2"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="my-3">
        <Swiper
          className="sm:min-h-[280px] min-h-[220px]"
          slidesPerView={3}
          breakpoints={{
            600: {
              slidesPerView: 6,
            },
          }}
          navigation={true}
          loop
          modules={[Navigation]}
        >
          {productCT.data.map((item, index) => (
            <SwiperSlide key={index}>
              <CardProduct bestSeller productEntry={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
