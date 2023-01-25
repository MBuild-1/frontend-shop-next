import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

export const ProductCategory = () => {
  return (
    <div className="mx-12 my-4 cat-bg-wrap">
      <p className="text-[2.5rem] px-6 py-2 font-semibold">
        Kategori Produk Indonesia
      </p>
      <Swiper
        className="min-h-[300px]"
        slidesPerView={5}
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
