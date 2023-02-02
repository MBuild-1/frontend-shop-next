import Link from 'next/link';

const Card = () => {
  return (
    <div className="sm:mx-4 mx-2">
      <Link href={''} passHref className="product">
        <div className="w-auto">
          <img
            src="http://masterbagasi.com:8081/image/uploads/category/202212300239CEMILAN%20BUAT%20REBAHAN.png"
            alt="..."
          />
        </div>
        <div className="text-center bg-[#eee] text-xs sm:text-base leading-6 sm:leading-8 title-product">
          <p>Title Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
