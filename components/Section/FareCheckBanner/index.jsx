import Link from 'next/link';
// Import Swiper React components
import { Button, Modal, Select, Table } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
// import '../../styles/styles.css';
// import required modules
import { Autoplay } from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const FareCheckBanner = () => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  const isModal = typeof window !== 'undefined';

  const handleChange = event => {
    setCountry(event.target.value);
    console.log(event.target.value);
  };

  async function getCountries() {
    try {
      const res = await axios.get('/v1/web/country');

      const result = await res.data;
      setCountries(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="sm:mx-12 my-2 relative">
      <Swiper
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay]}
        className="homeCarousel"
      >
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/frontend/img/banner/promoAustralia.png"
              alt="promoAustralia"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/frontend/img/banner/promoEropa.png"
              alt="promoEropa"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/frontend/img/banner/promoUK.png"
              alt="promoUK"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'#'} passHref>
            <img
              src="http://masterbagasi.com:8081/frontend/img/banner/promoUSA.png"
              alt="promoUSA"
            />
            {/* <Image
              src={
                'http://masterbagasi.com:8081/image/uploads/banner/202211292059WhatsApp%20Image%202022-11-30%20at%203.47.50%20AM.jpeg'
              }
              alt={'Carousel Content'}
              width={140}
              height={140}
            /> */}
          </Link>
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => setShow(true)}
        className="banner-btn sm:text-[27px] text-[7px] font-bold hover:text-stone-700"
      >
        Cek Tarif Ke Negara Lainnya
      </button>
      {isModal ? (
        <Modal show={show} onClose={() => setShow(false)}>
          <Modal.Header>Lihat Opsi dan Tarif Pengiriman Kami</Modal.Header>
          <Modal.Body>
            <div id="select" className="grid grid-cols-[60%_auto] mb-4 gap-2">
              <Select required={true} onChange={handleChange}>
                <option value="">Pilih Negara</option>
                {countries.map((i, x) => (
                  <option key={x} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </Select>
              <Button>Cek Tarif</Button>
            </div>
            <div id="select" className="grid grid-cols-1 mb-4">
              <Button>Ulasan Pengiriman</Button>
            </div>
            <div className="flex justify-center items-center border-2 border-gray-600 bg-[#B3B3B3] rounded py-3 ">
              <p className="text-white font-semibold text-lg text-center">
                Air Freight/Kg <br /> {country}
              </p>
            </div>
            <div>
              <Table hoverable={true}>
                <Table.Head>
                  <Table.HeadCell>Berat Min / Kg</Table.HeadCell>
                  <Table.HeadCell>Berat Max / Kg</Table.HeadCell>
                  <Table.HeadCell>Perorangan</Table.HeadCell>
                  <Table.HeadCell>Bersama</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell>Sliver</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                    <Table.Cell>Laptop</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>White</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                    <Table.Cell>Laptop PC</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>Black</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                    <Table.Cell>Accessories</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
};
