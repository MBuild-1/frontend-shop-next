import { Footer, Navbar } from '@/components';
import CardProduct from '@/components/CardProduct';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStore, FaShareAlt, FaCaretDown } from 'react-icons/fa';

import DefaultImg from '../../images/default-picture.jpg';

const Brand = ({ image, title, slug }) => {
  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const brands = await axios.get('http://localhost:8080/brand');
      const products = await axios.get('http://localhost:8080/product');

      setBrand(await brands.data);
      setProduct(await products.data);
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container px-6 mt-[4.5rem]">
        <div className="bg-pink-300 h-[30vh]">
          <div className="flex justify-start items-center h-full gap-4 px-12">
            <Image
              className="rounded-full w-[170px]"
              src={image ? image : DefaultImg}
              alt={'Dummy'}
            />
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
                <p className="text-2xl text-white font-semibold">Brand Name</p>
              </div>
              <div className="flex gap-2">
                <button className="btn border-2 border-transparent px-10 py-1 rounded font-semibold text-white hover:text-black bg-[#ff4200]">
                  Favorit
                </button>
                <button className="btn border-2 border-transparent px-3 py-1 rounded text-white hover:text-black bg-[#ff4200]">
                  <FaStore />
                </button>
                <button className="btn border-2 border-transparent px-3 py-1 rounded text-white hover:text-black bg-[#ff4200]">
                  <FaShareAlt />
                </button>
              </div>
            </div>
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
                        <span>Brand Name</span>
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
                {brand.map(({ title }, i) => (
                  <div
                    key={i}
                    className="flex items-center py-1 hover:text-[#FF4200]"
                  >
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 mt-1 mx-4 ml-1 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                    <Link href={''} passHref>
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

export default Brand;
