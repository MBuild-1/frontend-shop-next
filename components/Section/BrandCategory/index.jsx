import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import CardBrand from '@/components/CardBrand';
import axios from 'axios';

export const BrandCategory = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    const getBrand = async () => {
      const res = await axios.get('http://localhost:8080/brand');

      setBrand(await res.data);
    };

    getBrand();
  }, []);

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
          {brand.map(({ image, title, slug }, i) => (
            <SwiperSlide key={i}>
              <CardBrand image={image} title={title} slug={slug} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
