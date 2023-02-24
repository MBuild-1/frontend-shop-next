import Image from 'next/image';
import Link from 'next/link';
import EmptyImage from '../../images/default-picture.jpg';
import LabelType from './LabelType';

const CardProduct = ({ isViral, bestSeller, productEntry, ...props }) => {
  return (
    <Link href={productEntry.id}>
      <div className="lg:mx-2 lg:mb-3 mx-1 border-2 shadow-md" {...props}>
        <div className="flex relative w-full lg:h-[220px] h-[120px] items-center justify-center overflow-hidden">
          {productEntry.product_image.length !== 0 ? (
            <Image
              src={
                process.env.NEXT_PUBLIC_API_STORAGE_URL +
                '/' +
                productEntry.product_image[0].path.replace('public/', '')
              }
              alt={productEntry.product.name}
              fill
            />
          ) : (
            <Image
              src={EmptyImage}
              alt={productEntry.product.name}
              width={200}
              height={200}
              priority
            />
          )}
        </div>
        <div className="bg-[#fff]">
          <div className="lg:mb-2 mb-1">
            <div className="relative">
              {isViral && bestSeller ? (
                <div>
                  <LabelType type={'isViral'} title={'Lagi Viral'} />
                  <LabelType type={'bestSeller'} title={'Terlaris'} />
                </div>
              ) : isViral ? (
                <LabelType type={'isViral'} title={'Lagi Viral'} />
              ) : bestSeller ? (
                <LabelType type={'bestSeller'} title={'Terlaris'} />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="lg:mx-2 mx-1">
            <p className="lg:text-base lg:leading-5 text-xs leading-[0.8rem] lg:h-[6vh] h-[5vh]">
              {productEntry.product.name.length > 42
                ? `${productEntry.product.name.substring(0, 42)}...`
                : productEntry.product.name}
            </p>
            <div className="flex justify-between lg:my-3 mt-3 mb-1">
              <p className="lg:text-[1rem] text-[0.6rem] font-bold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(productEntry.selling_price)}
              </p>
              <p className="font-bold lg:text-[0.8rem] text-[0.6rem]">
                {productEntry.weight} <span className="font-normal">Kg</span>
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
      </div>
    </Link>
  );
};

export default CardProduct;
