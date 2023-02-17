import CardBrand from '@/components/CardBrand';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BrandCategory = ({ brands }) => {
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
          loop={true}
          modules={[Navigation]}
        >
          {brands.map(({ name, slug, icon }, i) => (
            <SwiperSlide key={i}>
              <CardBrand icon={icon} name={name} slug={slug} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
