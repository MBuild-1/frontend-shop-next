import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../../images/default-picture.jpg';

const Card = () => {
  return (
    <div className="card-review mx-4 border-2 sm:mt-6 mt-2">
      <div className="flex justify-between">
        <div className="border-2 border-white">
          <Image src={DefaultImg} alt={'Dummy'} width={300} height="auto" />
        </div>
        <div className="py-2 sm:px-5 px-1 text-justify bg-white">
          <p className="text-[#FF4200] font-semibold text-xs sm:text-xl">
            Cepet Banget Sampainya!!
          </p>
          <div className="sm:my-2 mt-2">
            <p className="text-xs sm:text-base">
              " Jakarta Korea Selatan, awalnya luamayan deg degan, karna this is
              my first time experience sama Master Bagasi. Tapi ternyata cepat
              banget sampainyaa hihi "
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="flex">
              <p className="sm:text-base text-sm">Nancy</p>
              <span className="px-2 sm:text-base text-sm">-</span>
              <p className="sm:text-base text-sm">Korea Selatan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
