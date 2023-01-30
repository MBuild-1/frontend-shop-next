import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative, Navigation } from 'swiper';

export function SeasonsBanner() {
  return (
    <div className="mx-12 my-2 season">
      <div className="border-2">
        <Swiper
          grabCursor={true}
          autoplay={{ delay: 5000 }}
          navigation={true}
          loop={true}
          modules={[Navigation, EffectCreative]}
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-120%', 0, -500],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -500],
            },
          }}
        >
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="bundle-season pl-14 py-4">
                  <p className="text-[45px] font-bold text-[#00428C]">
                    Winter Bundling
                  </p>
                  <p className="text-center text-[35px] bg-[#00428C] text-white">
                    <span>
                      <strong>Rp1.890.000</strong>
                    </span>
                  </p>
                  <div className="p-2 mt-2 flex items-center justify-between">
                    <div className="w-[48px] h-[48px]">
                      <img
                        className="wishlist-hover"
                        src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                        alt="wishlist"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-lg px-6 py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="bundle-season pl-14 py-4">
                  <p className="text-[45px] font-bold text-[#00428C]">
                    Autumn Bundling
                  </p>
                  <p className="text-center text-[35px] bg-[#00428C] text-white">
                    <span>
                      <strong>Rp2.000.000</strong>
                    </span>
                  </p>
                  <div className="p-2 mt-2 flex items-center justify-between">
                    <div className="w-[48px] h-[48px]">
                      <img
                        className="wishlist-hover"
                        src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                        alt="wishlist"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-lg px-6 py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="bundle-season pl-14 py-4">
                  <p className="text-[45px] font-bold text-[#00428C]">
                    Summer Bundling
                  </p>
                  <p className="text-center text-[35px] bg-[#00428C] text-white">
                    <span>
                      <strong>Rp2.450.000</strong>
                    </span>
                  </p>
                  <div className="p-2 mt-2 flex items-center justify-between">
                    <div className="w-[48px] h-[48px]">
                      <img
                        className="wishlist-hover"
                        src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                        alt="wishlist"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-lg px-6 py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="bundle-season pl-14 py-4">
                  <p className="text-[45px] font-bold text-[#00428C]">
                    Spring Bundling
                  </p>
                  <p className="text-center text-[35px] bg-[#00428C] text-white">
                    <span>
                      <strong>Rp2.130.000</strong>
                    </span>
                  </p>
                  <div className="p-2 mt-2 flex items-center justify-between">
                    <div className="w-[48px] h-[48px]">
                      <img
                        className="wishlist-hover"
                        src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                        alt="wishlist"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-lg px-6 py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="bundle-season pl-14 py-4">
                  <p className="text-[45px] font-bold text-[#00428C]">
                    Hari Raya Bundling
                  </p>
                  <p className="text-center text-[35px] bg-[#00428C] text-white">
                    <span>
                      <strong>Rp1.990.000</strong>
                    </span>
                  </p>
                  <div className="p-2 mt-2 flex items-center justify-between">
                    <div className="w-[48px] h-[48px]">
                      <img
                        className="wishlist-hover"
                        src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                        alt="wishlist"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-lg px-6 py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                      >
                        + Keranjang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
