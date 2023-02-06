import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardProduct from '@/components/CardProduct';

export const ViralCategory = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:8080/product');

      setProduct(await res.data);
    };

    getProducts();
  }, []);

  return (
    <div className="sm:mx-12 my-2 viral-bg-wrap">
      <div className="flex justify-between pt-3 pl-5 sm:py-2 sm:px-4">
        <p className="sm:text-[2rem] sm:pl-4 text-white font-semibold">
          Lagi Viral
        </p>
        <button
          type="button"
          className="text-[#FF4200] font-bold text-sm sm:text-[1.3rem] px-7 py-[5px] text-center sm:mr-2 mb-3 sm:mb-2"
        >
          Lihat Semua
        </button>
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
          modules={[Navigation]}
        >
          {product.map(({ image, title, price, weight, slug }, i) => (
            <SwiperSlide key={i}>
              <CardProduct
                key={i}
                label={'Lagi Viral'}
                image={image}
                title={title}
                price={price}
                weight={weight}
                slug={slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
