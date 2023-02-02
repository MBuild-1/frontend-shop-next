import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Youtube = () => {
  return (
    <div className="sm:w-[50%] sm:my-6 mb-3 sm:pr-2">
      <Swiper
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={''} passHref>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mJ6-dQwGhvs?html5=1&enablejsapi=1"
              title="KEBANJIRAN BASO ACI SAMI RAOS❤️‍🔥 #kirimpaketkeluarnegeri #jasatitipindonesia #umkm #jastipmurah"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={''} passHref>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mJ6-dQwGhvs?html5=1&enablejsapi=1"
              title="KEBANJIRAN BASO ACI SAMI RAOS❤️‍🔥 #kirimpaketkeluarnegeri #jasatitipindonesia #umkm #jastipmurah"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Youtube;
