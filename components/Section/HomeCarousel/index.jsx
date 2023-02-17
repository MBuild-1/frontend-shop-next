import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HomeCarousel = ({ banners }) => {
  return (
    <div className="sm:mb-4 mt-[8.4rem] lg:mt-[4.8rem]">
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
        className="homeCarousel"
      >
        {' '}
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href={'#'} passHref className="flex w-full h-[320px]">
              <Image
                className="border-6 border-white"
                src={
                  process.env.NEXT_PUBLIC_API_STORAGE_URL +
                  '/' +
                  banner.image_desktop.replace('public/', '')
                }
                alt={'HomeBanner'}
                fill
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
