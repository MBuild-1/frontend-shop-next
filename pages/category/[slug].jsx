import { Footer, Navbar } from '@/components';
import CardProduct from '@/components/CardProduct';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Category = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const getData = async () => {
      const categories = await axios.get('http://localhost:8080/category');
      const products = await axios.get('http://localhost:8080/product');

      setCategory(await categories.data);
      setProduct(await products.data);
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container px-6 mt-[5rem]">
        <div className="bg-[#FF4200] h-[45vh]">
          <div className="flex justify-start pl-5 pb-10 items-end h-full">
            <p className="text-white font-semibold text-4xl">{slug}</p>
          </div>
        </div>
        <div className="my-3">
          <div className="flex justify-center">
            <div className="border shadow-lg w-full">
              <ul className="shadow-inner">
                <li className="px-3 py-4">
                  <div className="wrap-breadcrumb">
                    <ul className="flex">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <span>{slug}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[25%_auto]">
          <div className="border shadow-md w-full">
            <div className="py-2 px-4 bg-[#F7F7F7]">
              <p className="font-semibold text-[20px] ">Filter</p>
            </div>
            <ul>
              <div className="flex items-center py-2">
                <button className="dropdown-category">
                  Kategori
                  <i className="float-right pr-2">
                    <FaCaretDown />
                  </i>
                </button>
              </div>
              <div className="block pb-2 pl-6">
                {category.map(({ title, slug }, i) => (
                  <div key={i} className="py-1 hover:text-[#FF4200]">
                    <Link href={`/category/${slug}`} passHref>
                      {title}
                    </Link>
                  </div>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-5">
              {product.map(({ href, image, title, price, weight }, i) => (
                <CardProduct
                  key={i}
                  href={href}
                  label={'Terlaris'}
                  image={image}
                  title={title}
                  price={price}
                  weight={weight}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Category;
