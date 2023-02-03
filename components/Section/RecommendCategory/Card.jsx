import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../../images/default-picture.jpg';

const Card = () => {
  return (
    <div className="sm:mx-3 mx-1 border-2">
      <Link href={''} passHref>
        <Image src={DefaultImg} alt={'Dummy'} width="auto" height="auto" />
        <div className="bg-[#fff]">
          <div className="pb-4 sm:mb-4 mb-3">
            <div className="relative">
              <span className="absolute left-0 sm:px-2 px-1 py-1 sm:text-base text-sm label-product bg-navy">
                Terlaris
              </span>
            </div>
          </div>
          <div className="sm:mx-3 mx-1">
            <p className="sm:text-lg text-xs leading-[0.8rem] sm:h-[8vh] h-[5vh]">
              Title Product Ngetest Bisa Sepanjang Apasih?
            </p>
            <div className="flex justify-between my-1">
              <p className="sm:text-[1.4rem] text-xs font-bold">Rp20.000</p>
              <p className="font-bold text-xs">
                1.5 <span className="font-normal">Kg</span>
              </p>
            </div>
            <div className="sm:py-2 sm:mt-2 flex justify-between items-center">
              <div className="sm:w-[48px] sm:h-[48px] w-[30px] h-[30px]">
                <img
                  className="wishlist-hover"
                  src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                  alt="wishlist"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="text-[#ff4200] border-[2px] border-[#ff4200] font-bold rounded text-xs sm:text-lg sm:px-6 sm:py-1 hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200]"
                >
                  + Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
