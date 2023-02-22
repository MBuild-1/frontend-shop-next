import Image from 'next/image';
import Link from 'next/link';

import DefaultImg from '../../images/default-picture.jpg';

const CardBrand = ({ name, slug, icon }) => {
  return (
    <div className="mx-[0.9rem] sm:mx-4">
      <Link href={`/brand/${slug}`} passHref>
        <div className="w-[80px] sm:w-auto h-[80px] sm:h-[170px] sm:my-6 rounded-full border-4 border-transparent round-brand relative">
          <Image
            className="rounded-full transition ease-in-out delay-100 hover:scale-90 bg-white"
            src={
              icon
                ? process.env.NEXT_PUBLIC_API_STORAGE_URL +
                  '/' +
                  icon.replace('public/', '')
                : DefaultImg
            }
            alt={'Dummy'}
            fill
          />
        </div>
        <div className="text-center text-xs sm:text-base mt-2">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardBrand;
