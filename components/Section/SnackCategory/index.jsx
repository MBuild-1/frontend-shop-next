import CardProduct from '@/components/CardProduct';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SnackCategory = ({ snacks }) => {
  return (
    <div className="sm:mx-12 my-2 snack-bg-wrap">
      <div className="flex justify-between pt-3 pl-5 sm:py-2 sm:px-4">
        <p className="sm:text-[2rem] sm:pl-4 text-white font-semibold">
          Cemilan Buat Rebahan
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
          loop={true}
          modules={[Navigation]}
        >
          {snacks.data.map((snack, i) => (
            <SwiperSlide key={i}>
              <CardProduct
                key={i}
                label={'Terlaris'}
                image={snack.product_image[0]?.path}
                title={snack.product.name}
                price={snack.selling_price}
                weight={snack.weight}
                slug={snack.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
