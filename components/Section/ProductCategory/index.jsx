import CardCategory from '@/components/CardCategory';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductCategory = ({ categories }) => {
  return (
    <div className="lg:mx-12 lg:my-2 cat-bg-wrap">
      <p className="text-xl lg:text-[2.5rem] px-4 py-1 lg:py-5 lg:mb-2 font-semibold">
        Kategori Produk Indonesia
      </p>
      <Swiper
        className="sm:min-h-[290px] min-h-[200px]"
        slidesPerView={2.5}
        breakpoints={{
          600: {
            slidesPerView: 5.5,
          },
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
      >
        {categories.map(({ name, slug, icon }, i) => (
          <SwiperSlide key={i}>
            <CardCategory icon={icon} name={name} slug={slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategory;
