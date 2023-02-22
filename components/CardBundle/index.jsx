import Image from 'next/image';
import Link from 'next/link';

const CardBundle = ({ banner, name, price }) => {
  return (
    <Link href={'#'} passHref>
      <div className="relative bg-white">
        <div className="flex">
          <div className="flex-[2] sm:h-auto">
            <Image
              src={
                process.env.NEXT_PUBLIC_API_STORAGE_URL +
                '/' +
                banner.replace('public/', '')
              }
              alt={name}
              width={400}
              height={400}
            />
          </div>
          <div className="flex-[1]">
            <p className="lg:text-[32px] text-[18px] lg:leading-8 lg:pt-10 pt-5 font-bold text-[#25258C] lg:mb-20 mb-10">
              {name}
            </p>
            <p className="flex sm:text-[28px] bg-navy justify-center items-center text-white">
              <span>
                <strong>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(price)}
                </strong>
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
  );
};

export default CardBundle;
