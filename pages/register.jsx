import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRegister } from '@/hooks/useRegister';

export default function Register() {
  const { form, handleSubmit, handleChange, errors, isSubmit } = useRegister();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      (errors.name ||
        errors.email ||
        errors.password ||
        errors.password_confirmation) !== undefined
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Authentication failed!',
      });
    }
  }, [errors]);

  return (
    <div className="mx-2">
      <div className="container mx-auto lg:px-28 py-4">
        <Link href={'/'} passHref>
          <Image
            src={LogoMB}
            alt={'Logo Masterbagasi'}
            width={140}
            height={140}
          />
        </Link>
        <div className="grid lg:grid-cols-2 lg:gap-2 gap-4">
          <div className="relative w-full pt-4">
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
            <div className="w-full border-2 mx-auto sm:px-12 px-6 sm:py-4 py-2 sm:shadow-2xl">
              <p className="text-center font-bold sm:text-2xl text-xl">
                Daftar Sekarang
              </p>
              <p className="text-center pt-1 mb-4 sm:text-xl text-neutral-500">
                Sudah punya akun Masterbagasi?{' '}
                <Link href={'/login'} passHref className="text-[#ff4200]">
                  Masuk
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
                <p className="flex justify-center items-center lg:text-xl text-xs">
                  atau daftar dengan
                </p>
                <svg class="dash" viewBox="-10 -1 50 1">
                  <line x1="-9" x2="39"></line>
                </svg>
              </div>
              <form onSubmit={handleSubmit} method={'POST'}>
                <div class="relative z-0 w-full mb-3 group">
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name={'name'}
                    id={'name'}
                    class="block py-5 px-3 w-full text-gray-900 bg-transparent border-2 rounded-lg border-[#CED4DA] appearance-none dark:text-black dark:focus:border-[#ff4200] focus:outline-none focus:ring-0 focus:border-[#ff4200] peer"
                    placeholder=" "
                    required
                  />
                  <label class="px-4 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">
                    Name
                  </label>
                </div>
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
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type={show ? 'text' : 'password'}
                    value={form.password_confirmation}
                    onChange={handleChange}
                    name={'password_confirmation'}
                    id={'password_confirmation'}
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
                    Confirm Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-white bg-[#FF4200]"
                >
                  Daftar
                </button>
              </form>
              <p className="text-center mt-3 sm:text-xl text-lg text-neutral-500">
                Dengan ini, saya menyetujui
              </p>
              <div className="flex justify-center">
                <Link
                  href={'/'}
                  passHref
                  className="sm:text-xl text-sm text-[#ff4200]"
                >
                  Syarat dan Ketentuan
                </Link>
                <p className="sm:mx-2 mx-1 sm:text-xl text-sm text-neutral-500">
                  serta
                </p>
                <Link
                  href={'/'}
                  passHref
                  className="sm:text-xl text-sm text-[#ff4200]"
                >
                  Kebijakan Privasi
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:mt-6 mt-3">
          <p className="sm:text-lg text-[0.6rem] text-neutral-500">
            Ⓒmasterbagasi 2021-2023, PT. Bumi Hijau Khatulistiwa |{' '}
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
