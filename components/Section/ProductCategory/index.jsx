import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const ProductCategory = () => {
  return (
    <div className="sm:mx-12 sm:my-2 cat-bg-wrap">
      <p className="text-xl sm:text-[2.5rem] px-4 py-2 font-semibold">
        Kategori Produk Indonesia
      </p>
      <Swiper
        className="sm:min-h-[290px] min-h-[170px]"
        slidesPerView={2.5}
        breakpoints={{
          600: {
            slidesPerView: 5,
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
      </Swiper>
    </div>
  );
};

export default ProductCategory;
