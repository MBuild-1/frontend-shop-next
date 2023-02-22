import Link from 'next/link';
import Image from 'next/image';

import DefaultImg from '../../images/default-picture.jpg';

const CardCategory = ({ name, slug, icon }) => {
  return (
    <div className="sm:mx-4 mx-2">
      <Link href={`/category/${slug}`} passHref className="product">
        <Image
          src={
            icon
              ? process.env.NEXT_PUBLIC_API_STORAGE_URL +
                '/' +
                icon.replace('public/', '')
              : DefaultImg
          }
          alt={'Dummy'}
          width={300}
          height={300}
        />
        <div className="text-center bg-[#eee] text-xs sm:text-base leading-6 sm:leading-8 title-product">
          <p>{name.length > 18 ? name.substring(0, 15) + '...' : name}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardCategory;
