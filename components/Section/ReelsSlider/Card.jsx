import Image from 'next/image';
import Link from 'next/link';
import DefaultImg from '../../../images/default-picture.jpg';

const Card = () => {
  return (
    <div className="relative sm:bottom-0 bottom-3 sm:mx-3">
      <Link href={''} passHref>
        <iframe
          className="rounded-md sm:w-[15rem] sm:h-[30rem] w-[7rem] h-[15rem]"
          src="https://www.youtube.com/embed/JpBvYhcHaK0?html5=1&enablejsapi=1"
          title="Tips menerima paket dari Indonesia yang dikirim oleh Master Bagasi✨🥰  #kirimpaketkeluarnegeri"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Link>
    </div>
  );
};

export default Card;
