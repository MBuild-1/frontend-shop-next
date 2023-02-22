import Link from 'next/link';
import { Button, Modal, Select, Table } from 'flowbite-react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelectCountry } from '@/hooks/useSelectCountry';
import { CryptoJSAesEncrypt } from '@/lib/cryptoJS';
import Image from 'next/image';

export const FareCheckBanner = ({ banners }) => {
  const { cargo, handleSelectChange, loading } = useSelectCountry();

  const [show, setShow] = useState(false);
  const [countries, setCountries] = useState([]);

  const isModal = typeof window !== 'undefined';

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
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link
              href={'#'}
              passHref
              className="flex w-full lg:h-[250px] h-[70px]"
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_API_STORAGE_URL +
                  '/' +
                  banner.image_desktop.replace('public/', '')
                }
                alt={banner.title}
                fill
              />
            </Link>
          </SwiperSlide>
        ))}
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
              <Select required={true} onChange={handleSelectChange}>
                <option value="">Pilih Negara</option>
                {countries.map(({ zone_id, name }, x) => {
                  const encryptZoneID = JSON.parse(CryptoJSAesEncrypt(zone_id));
                  const newZoneID =
                    encryptZoneID.iv +
                    '-' +
                    encryptZoneID.s +
                    '-' +
                    encryptZoneID.ct;
                  return (
                    <option key={x} value={newZoneID}>
                      {name}
                    </option>
                  );
                })}
              </Select>
              <Button>Ulasan Pengiriman</Button>
            </div>
            <div className="flex justify-center items-center border-2 border-gray-600 bg-[#B3B3B3] rounded py-3 ">
              <p className="text-white font-semibold text-lg text-center">
                Air Freight/Kg
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
                  {loading ? (
                    <Table.Row>
                      <Table.Cell className="text-center col-span-4">
                        Loading...
                      </Table.Cell>
                    </Table.Row>
                  ) : cargo.length !== 0 ? (
                    cargo.map(
                      (
                        { min_weight, max_weight, price, price_together },
                        x,
                      ) => {
                        return (
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                            key={x}
                          >
                            <Table.Cell className="text-center">
                              {min_weight} Kg
                            </Table.Cell>
                            <Table.Cell className="text-center">
                              {max_weight} Kg
                            </Table.Cell>
                            <Table.Cell className="text-center">
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              }).format(price)}
                            </Table.Cell>
                            <Table.Cell className="text-center">
                              {new Intl.NumberFormat('id-ID', {
                                style: 'currency',
                                currency: 'IDR',
                              }).format(price_together)}
                            </Table.Cell>
                          </Table.Row>
                        );
                      },
                    )
                  ) : (
                    <Table.Row>
                      <Table.Cell className="text-center col-span-4">
                        Kosong.
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
};
