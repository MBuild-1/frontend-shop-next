import Link from 'next/link';
import Image from 'next/image';

import DefaultImg from '../../images/default-picture.jpg';

const CardCategory = ({ image, title, slug }) => {
  return (
    <div className="sm:mx-4 mx-2">
      <Link href={`/category/${slug}`} passHref className="product">
        <Image
          src={image ? image : DefaultImg}
          alt={'Dummy'}
          width="auto"
          height="auto"
        />
        <div className="text-center bg-[#eee] text-xs sm:text-base leading-6 sm:leading-8 title-product">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardCategory;
