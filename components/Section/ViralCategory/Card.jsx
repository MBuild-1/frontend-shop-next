import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../../images/default-picture.jpg';

const Card = () => {
  return (
    <div className="mx-3 border-2 shadow-lg shadow-[#cacaca]">
      <Link href={''} passHref>
        <Image src={DefaultImg} alt={'Dummy'} width="auto" height="auto" />
        <div className="bg-[#fff]">
          <div className="pb-4 mb-4">
            <div className="relative">
              <span className="absolute left-0 px-2 py-1 label-product terviral">
                Terviral
              </span>
              <span className="absolute left-5 px-2 py-1 label-product terlaris flex justify-end">
                Terlaris
              </span>
            </div>
          </div>
          <div className="mx-3">
            <p className="text-lg leading-6 h-[8vh]">
              Title Product Ngetest Bisa Sepanjang Apasih?
            </p>
            <div className="flex justify-between">
              <p className="text-[1.4rem] font-bold">Rp20.000</p>
              <p className="font-bold">
                1.5 <span className="font-normal">Kg</span>
              </p>
            </div>
            <div className="p-2 mt-2 flex justify-between">
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
    </div>
  );
};

export default Card;
