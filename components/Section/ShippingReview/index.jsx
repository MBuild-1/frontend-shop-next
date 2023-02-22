import CardReview from '@/components/CardReview';
import { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ShippingReview = ({ reviews }) => {
  return (
    <div className="sm:mx-12 sm:my-4 my-2">
      <p className="sm:text-[1.7rem] sm:py-2 sm:w-[20%] w-[40%] font-semibold border-b-[0.2rem] border-[#FF4200]">
        Ulasan Pengiriman
      </p>
      <div className="sm:py-6 testi-swiper sm:my-6 mt-2 sm:h-64 h-[10rem]">
        <Swiper
          autoplay={{ delay: 5000 }}
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <CardReview
                key={index}
                avatar={review.avatar}
                title={review.title}
                message={review.message}
                name={review.name}
                region={review.region}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
