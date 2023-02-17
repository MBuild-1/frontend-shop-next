import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useLogin } from '@/hooks/useLogin';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Head from 'next/head';
import { Spinner } from 'flowbite-react';

export default function Login() {
  const { form, handleChange, handleSubmit, errors, isSubmit } = useLogin();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if ((errors.email || errors.password) !== undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Authentication failed!',
      });
    }
  }, [errors]);

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
        <div className="grid lg:grid-cols-2 lg:gap-2 gap-4 lg:border-0 border-b-2">
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
          <div className="sm:p-1">
            <div className="w-full lg:border-2 mx-auto sm:px-12 px-6 sm:py-4 py-2 sm:shadow-2xl">
              <p className="text-center font-bold sm:text-2xl text-xl">
                Masuk ke Masterbagasi
              </p>
              <p className="text-center pt-1 mb-4 sm:text-xl text-neutral-500">
                Belum punya akun Masterbagasi?{' '}
                <Link href={'/register'} passHref className="text-[#ff4200]">
                  Ayo Daftar
                </Link>
              </p>
              <Link
                href={'/'}
                passHref
                className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-white bg-[#ee2a23]"
              >
                <FaGoogle className="mt-1 mr-2 w-5" />
                Lanjutkan dengan Google
              </Link>
              <Link
                href={'/'}
                passHref
                className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-white bg-[#216ab9]"
              >
                <FaFacebookF className="mt-1 mr-2 w-5" />
                Lanjutkan dengan Facebook
              </Link>
              <div className="flex justify-between my-3">
                <svg class="dash" viewBox="-10 -1 50 1">
                  <line class="secondary" x1="-9" x2="39"></line>
                </svg>
                <p className="flex justify-center items-center text-xl">
                  Master Bagasi
                </p>
                <svg class="dash" viewBox="-10 -1 50 1">
                  <line x1="-9" x2="39"></line>
                </svg>
              </div>
              <form onSubmit={handleSubmit} method={'POST'}>
                <div class="relative z-0 w-full mb-3 group">
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange}
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
                <div class="relative z-0 w-full mb-4 group">
                  <input
                    type={show ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange}
                    name={'password'}
                    id={'password'}
                    class="block py-5 px-3 w-full text-gray-900 bg-transparent border-2 rounded-lg border-[#CED4DA] appearance-none dark:text-black dark:focus:border-[#ff4200] focus:outline-none focus:ring-0 focus:border-[#ff4200] peer"
                    placeholder=" "
                    required
                  />
                  <button
                    onClick={() => setShow(!show)}
                    type="button"
                    toggle="#password-popLogin2"
                    className={
                      show
                        ? 'eyehide field-icon toggle-password'
                        : 'eyeshow field-icon toggle-password'
                    }
                  ></button>
                  <label
                    for="floating_password"
                    class="px-4 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
                  >
                    Password
                  </label>
                </div>
                <div class="flex justify-between mb-3">
                  <div className="flex">
                    <div class="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        class="w-5 h-5 mt-1 ml-1 border border-gray-300 rounded bg-gray-50 focus:outline-none"
                      />
                    </div>
                    <label for="terms" class="ml-2 text-md text-black">
                      Remember Password
                    </label>
                  </div>
                  <Link
                    href={'/forgot-password'}
                    passHref
                    className="text-[#ff4200]"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type={isSubmit ? 'button' : 'submit'}
                  className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-lg text-white bg-[#FF4200]"
                >
                  {isSubmit ? <Spinner /> : 'Login'}
                </button>
              </form>
              <div className="flex items-center justify-center gap-2 pt-5 pb-3">
                <p className="sm:text-lg text-lg text-neutral-500">
                  Butuh Bantuan?
                </p>
                <Link
                  href={'/'}
                  passHref
                  className="sm:text-lg text-sm text-[#ff4200]"
                >
                  Hubungi Masterbagasi Care
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-5 mt-3">
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
