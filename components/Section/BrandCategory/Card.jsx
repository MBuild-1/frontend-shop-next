import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../../images/default-picture.jpg';

const Card = () => {
  return (
    <div className="mx-[0.9rem] sm:mx-4">
      <Link href={''} passHref>
        <div className="w-[80px] sm:w-auto h-[80px] sm:h-[170px] sm:my-6 rounded-full border-4 border-gray-100 border-transparent round-brand relative">
          <Image
            className="rounded-full transition ease-in-out delay-100 hover:scale-90"
            src={DefaultImg}
            alt={'Dummy'}
            layout="fill"
            objectFit="contain"
          />
          {/* <img
            src={
              'http://masterbagasi.com:8081/image/uploads/category/202212300239CEMILAN%20BUAT%20REBAHAN.png'
            }
            alt="..."
            className="!rounded-full transition ease-in-out delay-100 hover:scale-90"
          /> */}
        </div>
        <div className="text-center text-xs sm:text-base mt-2">
          <p>Title Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
