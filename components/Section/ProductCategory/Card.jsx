import Link from 'next/link';

const Card = () => {
  return (
    <div className="mx-4">
      <Link href={''} passHref className="product">
        <div className="w-auto">
          <img
            src="http://masterbagasi.com:8081/image/uploads/category/202212300239CEMILAN%20BUAT%20REBAHAN.png"
            alt="..."
          />
        </div>
        <div className="text-center bg-[#eee] leading-8 title-product">
          <p>Title Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
