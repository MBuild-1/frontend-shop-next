import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardCategory from '@/components/CardCategory';

export const ProductCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get('http://localhost:8080/category');

      setCategory(await res.data);
    };

    getCategories();
  }, []);

  return (
    <div className="lg:mx-12 lg:my-2 cat-bg-wrap">
      <p className="text-xl lg:text-[2.5rem] px-4 py-1 lg:py-5 lg:mb-2 font-semibold">
        Kategori Produk Indonesia
      </p>
      <Swiper
        className="sm:min-h-[290px] min-h-[170px]"
        slidesPerView={2.5}
        breakpoints={{
          600: {
            slidesPerView: 5.5,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {category.map(({ image, title, slug }, i) => (
          <SwiperSlide key={i}>
            <CardCategory image={image} title={title} slug={slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategory;
