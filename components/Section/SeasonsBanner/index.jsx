import CardBundle from '@/components/CardBundle';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SeasonsBanner = ({ bundlings }) => {
  return (
    <div className="sm:mx-12 my-2 season">
      <div className="border-2">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
          }}
          navigation={true}
          loop={true}
          modules={[Navigation]}
        >
          {bundlings.map((bundle, index) => (
            <SwiperSlide key={index}>
              <CardBundle
                key={index}
                banner={bundle.banner}
                name={bundle.name}
                price={bundle.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
