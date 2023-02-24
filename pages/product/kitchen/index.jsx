import { Footer, Navbar } from '@/components';
import BreadCrumbList from '@/components/BreadCrumbList';
import CardProduct from '@/components/CardProduct';
import {
  CryptoJSAesDecrypt,
  CryptoJSAesEncrypt,
  loadBrand,
  loadCategory,
  loadProductEntryWithFilter,
} from '@/lib';
import { Accordion, Button, Spinner } from 'flowbite-react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiHome } from 'react-icons/hi';

import EmptyProduct from '../../../images/empty-product.png';

export const getServerSideProps = async () => {
  try {
    const categories = await loadCategory();
    const brands = await loadBrand();
    const productEntries = await loadProductEntryWithFilter(
      `type=kitchen&pageNumber=20&page=1`,
    );

    return {
      props: {
        categories,
        brands,
        productEntries,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const KitchenPage = props => {
  const { categories, brands, productEntries } = props;

  const breadcrumbs = [
    { href: '/', label: 'Home', icon: HiHome },
    { href: '/product', label: 'Produk' },
    {
      href: '/product/kitchen',
      label: 'Isi Dapur Indonesia',
      isCurrentPage: true,
    },
  ];

  const [start, setStart] = useState(2);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts(productEntries.data);
  }, [productEntries.data]);

  const handleLoadMore = async () => {
    setLoading(true);

    const encryptType = JSON.parse(
      CryptoJSAesEncrypt(`/entry?type=kitchen&pageNumber=20&page=${start}`),
    );

    const newType = encryptType.iv + '-' + encryptType.s + '-' + encryptType.ct;

    fetch('/api/product?type=' + newType)
      .then(res => res.json())
      .then(data => {
        setProducts([...products, ...CryptoJSAesDecrypt(data).data]);
        setStart(start + 1);
        setLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Produk Isi Dapur Indonesia | Masterbagasi</title>
      </Head>
      <Navbar />
      <div className="container lg:px-6 lg:mt-20 mt-[8.5rem]">
        <div className="relative">
          <div className="bg-blue-400 lg:h-[300px] h-[100px]"></div>
          <p className="absolute lg:bottom-6 bottom-2 lg:left-4 left-2 lg:text-3xl font-semibold z-10">
            Isi Dapur Indonesia
          </p>
        </div>
        <div className="bg-[#F7F7F7] lg:p-4 p-2 lg:my-4 my-2 rounded shadow-md">
          <BreadCrumbList breadcrumb={breadcrumbs} />
        </div>
        <div className="grid lg:grid-cols-[25%_auto]">
          <div className="block bg-[#F7F7F7] rounded-md lg:p-2 lg:mb-0 mb-2">
            <Accordion alwaysOpen className="border-none">
              <Accordion.Panel>
                <Accordion.Title className="!bg-[#25258C] focus:outline-none">
                  Kategori ({categories.length})
                </Accordion.Title>
                <Accordion.Content className="!bg-transparent text-black">
                  {categories.map(({ name, product, slug }, index) => {
                    return (
                      <Link
                        href={'/product/category/' + slug}
                        key={index}
                        className="focus:text-[#ff4200]"
                      >
                        <span className="flex items-center justify-between mb-2 hover:text-[#ff4200]">
                          <p>{name}</p>
                          <p>{product.length}</p>
                        </span>
                      </Link>
                    );
                  })}
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="!bg-[#25258C] focus:outline-none">
                  Brand ({brands.length})
                </Accordion.Title>
                <Accordion.Content className="!bg-transparent text-black">
                  {brands.map(({ name, product, slug }, index) => {
                    return (
                      <Link
                        href={'/product/brand/' + slug}
                        key={index}
                        className="focus:text-[#ff4200]"
                      >
                        <span className="flex items-center justify-between mb-2 hover:text-[#ff4200]">
                          <p>{name}</p>
                          <p>{product.length}</p>
                        </span>
                      </Link>
                    );
                  })}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div>
            {productEntries.data.length !== 0 ? (
              <>
                <div className="grid lg:grid-cols-5 grid-cols-3">
                  {products.map((item, index) => {
                    return (
                      <CardProduct
                        isViral={item.is_viral === 1 ? true : false}
                        key={index}
                        productEntry={item}
                      />
                    );
                  })}
                </div>
                <div className="flex col-span-4 items-center justify-center lg:my-0 lg:mt-4 my-4">
                  {!(products.length >= productEntries.total) &&
                    (loading ? (
                      <Spinner color="info" size="xl" />
                    ) : (
                      <Button
                        gradientMonochrome="info"
                        onClick={handleLoadMore}
                      >
                        Lihat Lebih Banyak
                      </Button>
                    ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Image src={EmptyProduct} width={500} height={500} />
                <p className="text-center">
                  Produk Dari Kategori Isi Dapur Indonesia Belum Tersedia.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KitchenPage;
