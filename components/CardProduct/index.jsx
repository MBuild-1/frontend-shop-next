import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../images/default-picture.jpg';

const CardProduct = ({ href = '#', image, label, title, price, weight }) => {
  return (
    <div className="lg:mx-2 lg:mb-3 mx-1 border-2 shadow-md">
      <Link href={href} passHref>
        <Image
          src={image ? image : DefaultImg}
          alt={'Dummy'}
          width="auto"
          height="auto"
        />
        <div className="bg-[#fff]">
          <div className="pb-4 sm:mb-4 mb-3">
            <div className="relative">
              <span
                className={`absolute left-0 sm:px-2 px-1 py-1 sm:text-base text-sm label-product ${
                  label === 'Terlaris' ? 'terlaris' : 'terviral'
                }`}
              >
                {label}
              </span>
            </div>
          </div>
          <div className="lg:mx-2 mx-1">
            <p className="lg:text-base lg:leading-5 text-xs leading-[0.8rem] lg:h-[6vh] h-[5vh]">
              {title}
            </p>
            <div className="flex justify-between lg:my-3 mt-3 mb-1">
              <p className="lg:text-[1rem] text-[0.6rem] font-bold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(price)}
              </p>
              <p className="font-bold lg:text-[0.8rem] text-[0.6rem]">
                {weight} <span className="font-normal">Kg</span>
              </p>
            </div>
            <div className="flex justify-around items-center">
              <div className="flex items-center lg:w-[45px] lg:h-[45px] w-[30px] h-[30px]">
                <img
                  className="wishlist-hover"
                  src="http://masterbagasi.com:8081/frontend/img/ico/wishlist/cta/wishlist-off.svg"
                  alt="wishlist"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="text-[#ff4200] border-[2px] border-[#ff4200] font-bold rounded text-xs lg:text-md lg:px-3 lg:py-1 hover:text-white hover:bg-[#ff4200] hover:border-[#FF4200]"
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

export default CardProduct;
