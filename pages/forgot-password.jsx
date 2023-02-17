import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useLogin } from '@/hooks/useLogin';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Head from 'next/head';
import { Spinner } from 'flowbite-react';

export default function ForgotPassword() {
  return (
    <div className="mx-2">
      <Head>
        <title>Masuk / Login | Masterbagasi</title>
      </Head>
      <div className="container mx-auto lg:px-28 py-4">
        <Link href={'/'} passHref className="inline-block">
          <Image
            src={LogoMB}
            alt={'Logo Masterbagasi'}
            width={140}
            height={140}
          />
        </Link>
        <div className="grid lg:grid-cols-2 lg:gap-2 gap-4 justify-center items-center lg:border-0 border-b-2 lg:h-auto h-[560px]">
          <div className="hidden md:block relative w-full pt-4">
            <div className="text-center pt-[60%] px-3">
              <p className="font-bold text-[1.35rem] sm:text-4xl text-neutral-800 sm:mb-2 mb-1">
                Selamat Datang di Master Bagasi
              </p>
              <p className="sm:text-[1.7rem] sm:leading-8 text-neutral-500">
                E-Commerce pertama di Indonesia yang telah menjangkau lebih dari
                70 Negara di Dunia
              </p>
            </div>
          </div>
          <div className="sm:p-1 sm:pt-20">
            <div className="w-full lg:border-2 mx-auto sm:px-12 px-6 sm:py-4 py-2 sm:shadow-2xl">
              <p className="mt-3 text-center font-bold sm:text-2xl text-xl">
                Lupa Password
              </p>
              <p className="text-center pt-1 mt-4 mb-4 sm:text-xl text-neutral-500">
                Masukkan e-mail yang terdaftar. Kami akan mengirimkan kode
                verifikasi untuk atur ulang kata sandi.
              </p>
              <div className="flex justify-between my-6">
                <svg class="dash" viewBox="-10 -1 50 1">
                  <line class="secondary" x1="-9" x2="39"></line>
                </svg>
                <p className="flex justify-center items-center lg:text-xl text-xs">
                  Atur Ulang Kata Sandi
                </p>
                <svg class="dash" viewBox="-10 -1 50 1">
                  <line x1="-9" x2="39"></line>
                </svg>
              </div>
              <form method={'POST'}>
                <div class="relative z-0 w-full my-6 group">
                  <input
                    type="email"
                    name={'email'}
                    id={'email'}
                    class="block py-5 px-3 w-full text-gray-900 bg-transparent border-2 rounded-lg border-[#CED4DA] appearance-none dark:text-black dark:focus:border-[#ff4200] focus:outline-none focus:ring-0 focus:border-[#ff4200] peer"
                    placeholder=" "
                    required
                  />
                  <label class="px-4 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">
                    Email address
                  </label>
                </div>
                <button
                  type="submit"
                  className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-lg text-white bg-[#FF4200]"
                >
                  Kirim
                </button>
              </form>
              <div className="flex items-center justify-around pt-5 pb-3">
                <Link
                  href={'/login'}
                  passHref
                  className="sm:text-lg text-sm text-[#ff4200]"
                >
                  Login?
                </Link>
                <Link
                  href={'/register'}
                  passHref
                  className="sm:text-lg text-sm text-[#ff4200]"
                >
                  Register?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-28 mt-3">
          <p className="sm:text-lg text-[0.6rem] text-neutral-500">
            Ⓒ masterbagasi 2021-2023, PT. Bumi Hijau Khatulistiwa |{' '}
            <Link
              href={'/'}
              passHref
              className="sm:text-lg text-[0.6rem] text-[#ff4200]"
            >
              Masterbagasi Afiliasi
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
