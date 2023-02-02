import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Navigation } from 'swiper';

import WinterBanner from '../../../images/banners/musim-dingin.png';
import SummerBanner from '../../../images/banners/musim-panas.png';
import SpringBanner from '../../../images/banners/musim-gugur.png';
import AutumnBanner from '../../../images/banners/musim-semi.png';

export const SeasonsBanner = () => {
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
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="flex">
                  <div className="flex-[2] sm:h-auto">
                    <Image
                      src={WinterBanner}
                      alt={'Dummy'}
                      className="bg-cover"
                    />
                  </div>
                  <div className="flex-[1]">
                    <p className="sm:text-[30px] sm:leading-8 sm:pt-10 pt-5 font-bold text-[#25258C] sm:mb-20 mb-10">
                      Bundling <br /> Musim Dingin
                    </p>
                    <p className="flex sm:text-[28px] bg-navy justify-center items-center text-white">
                      <span>
                        <strong>Rp1.890.000</strong>
                      </span>
                    </p>
                    <div className="sm:p-2 mt-2 flex items-center justify-between">
                      <div className="sm:w-[48px] sm:h-[48px]">
                        <img
                          className="wishlist-hover"
                          src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                          alt="wishlist"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-sm sm:text-lg sm:px-6 sm:py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                        >
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="flex">
                  <div className="flex-[2] sm:h-auto">
                    <Image
                      src={SummerBanner}
                      alt={'Dummy'}
                      className="bg-cover"
                    />
                  </div>
                  <div className="flex-[1]">
                    <p className="sm:text-[30px] sm:leading-8 sm:pt-10 pt-5 font-bold text-[#25258C] sm:mb-20 mb-10">
                      Bundling <br /> Musim Panas
                    </p>
                    <p className="flex sm:text-[28px] bg-navy justify-center items-center text-white">
                      <span>
                        <strong>Rp1.890.000</strong>
                      </span>
                    </p>
                    <div className="sm:p-2 mt-2 flex items-center justify-between">
                      <div className="sm:w-[48px] sm:h-[48px]">
                        <img
                          className="wishlist-hover"
                          src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                          alt="wishlist"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-sm sm:text-lg sm:px-6 sm:py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                        >
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="flex">
                  <div className="flex-[2] sm:h-auto">
                    <Image
                      src={SpringBanner}
                      alt={'Dummy'}
                      className="bg-cover"
                    />
                  </div>
                  <div className="flex-[1]">
                    <p className="sm:text-[30px] sm:leading-8 sm:pt-10 pt-5 font-bold text-[#25258C] sm:mb-20 mb-10">
                      Bundling <br /> Musim Gugur
                    </p>
                    <p className="flex sm:text-[28px] bg-navy justify-center items-center text-white">
                      <span>
                        <strong>Rp1.890.000</strong>
                      </span>
                    </p>
                    <div className="sm:p-2 mt-2 flex items-center justify-between">
                      <div className="sm:w-[48px] sm:h-[48px]">
                        <img
                          className="wishlist-hover"
                          src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                          alt="wishlist"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-sm sm:text-lg sm:px-6 sm:py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                        >
                          + Keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={'#'} passHref>
              <div className="relative bg-white">
                <div className="flex">
                  <div className="flex-[2] sm:h-auto">
                    <Image
                      src={AutumnBanner}
                      alt={'Dummy'}
                      className="bg-cover"
                    />
                  </div>
                  <div className="flex-[1]">
                    <p className="sm:text-[30px] sm:leading-8 sm:pt-10 pt-5 font-bold text-[#25258C] sm:mb-20 mb-10">
                      Bundling <br /> Musim Semi
                    </p>
                    <p className="flex sm:text-[28px] bg-navy justify-center items-center text-white">
                      <span>
                        <strong>Rp1.890.000</strong>
                      </span>
                    </p>
                    <div className="sm:p-2 mt-2 flex items-center justify-between">
                      <div className="sm:w-[48px] sm:h-[48px]">
                        <img
                          className="wishlist-hover"
                          src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                          alt="wishlist"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          className="text-[#ff4200]  border-[2px] border-[#ff4200] font-bold rounded text-sm sm:text-lg sm:px-6 sm:py-1  hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200] "
                        >
                          + Keranjang
                        </button>
                      </div>
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
};
