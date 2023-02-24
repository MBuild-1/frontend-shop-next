import { useLogin } from '@/hooks/useLogin';
import axios from 'axios';
import { Modal, Spinner } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import nookies from 'nookies';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import DefaultAvatar from '../../../images/default-avatar.jpg';

export default function Auth() {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { form, handleChange, handleSubmit, errors, isSubmit } = useLogin();
  const { user } = useSelector(state => state.user);
  const [profile, setProfile] = useState();

  const isModal = typeof window !== 'undefined';

  useEffect(() => {
    if ((errors.email || errors.password) !== undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Authentication failed!',
      });
    }

    const { token } = nookies.get();

    if (user) {
      setProfile(user);
    } else if (!user && token) {
      axios.get('/v1/web/user/profile').then(res => {
        setProfile(res.data.data);
      });
    }
  }, [user, errors]);

  return (
    <div className="flex relative top-1">
      {profile ? (
        <div className="flex items-center px-1">
          <div className="px-3">
            <Image
              className="rounded-full"
              src={profile.avatar ? profile.avatar : DefaultAvatar}
              alt={'Avatar Profile'}
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-lg">
              {profile.name.length >= 15
                ? profile.name.substring(0, 15) + '...'
                : profile.name}
            </p>
          </div>
        </div>
      ) : (
        <>
          <button
            type="button"
            className="relative lg:ml-[1.5rem] md:ml-[0.8rem] mt-2 text-black font-bold border-[3px] border-[#DDDDDD] sm:border-[#DDDDDD] rounded text-sm px-4 lg:px-7 md:px-3 py-[5px] text-center mr-2 mb-2 ml-28 masuk-btn -left-[13rem] bottom-10 lg:bottom-0 md:bottom-0 lg:left-0 md:left-0"
            onClick={() => setShow(true)}
          >
            Masuk
          </button>
          {isModal ? (
            <Modal show={show} size="lg" onClose={() => setShow(false)}>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-2 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                  <div className="flex flex-col justify-center items-center gap-4 mb-6">
                    <p className="text-4xl font-medium text-white">HALO</p>
                    <p className="font-medium text-white">
                      Masuk Ke Masterbagasi atau{' '}
                      <Link
                        href={'/register'}
                        passHref
                        className="text-[#ff4200]"
                      >
                        Daftar
                      </Link>
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    method={'POST'}
                    className="border-b-2"
                  >
                    <div class="relative z-0 w-full mb-3 group">
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        name={'email'}
                        id={'email'}
                        class="block py-5 px-3 w-full text-white bg-transparent border-2 rounded-lg border-[#CED4DA] appearance-none dark:focus:border-[#ff4200] focus:outline-none focus:ring-0 focus:border-[#ff4200] peer"
                        placeholder=" "
                        required
                      />
                      <label class="px-4 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">
                        Email address
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-4 group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={handleChange}
                        name={'password'}
                        id={'password'}
                        class="block py-5 px-3 w-full text-white bg-transparent border-2 rounded-lg border-[#CED4DA] appearance-none dark:focus:border-[#ff4200] focus:outline-none focus:ring-0 focus:border-[#ff4200] peer"
                        placeholder=" "
                        required
                      />
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                        toggle="#password-popLogin2"
                        className={
                          showPassword
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
                    <div class="flex justify-between my-6">
                      <div className="flex">
                        <div class="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            value=""
                            class="w-5 h-5 mt-1 ml-1 border border-gray-300 rounded bg-gray-50 focus:outline-none"
                          />
                        </div>
                        <label for="terms" class="ml-2 text-md text-white">
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
                      className="flex w-full rounded-lg justify-center py-4 btn-slide slide-right font-bold text-lg text-white bg-[#FF4200] mb-6"
                    >
                      {isSubmit ? (
                        <Spinner />
                      ) : (
                        <div className="flex justify-end items-center gap-2">
                          <IoLogInOutline className="text-2xl" /> Login
                          Masterbagasi
                        </div>
                      )}
                    </button>
                  </form>
                  <Link
                    href={'/'}
                    passHref
                    className="flex w-full rounded-lg justify-center btn-slide slide-right font-bold text-white bg-[#ee2a23]"
                  >
                    <FaGoogle className="mt-1 mr-2 w-5" />
                    Lanjutkan dengan Google
                  </Link>
                  <Link
                    href={'/'}
                    passHref
                    className="flex w-full rounded-lg justify-center btn-slide slide-right font-bold text-white bg-[#216ab9]"
                  >
                    <FaFacebookF className="mt-1 mr-2 w-5" />
                    Lanjutkan dengan Facebook
                  </Link>
                </div>
              </Modal.Body>
            </Modal>
          ) : null}
          <Link href={'/register'} passHref>
            <button
              type="button"
              className="hidden md:block mt-2 text-white bg-[#B3B3B3] font-bold border-[3px] border-[#B3B3B3] rounded text-sm lg:px-7 md:px-3 py-[5px] text-center lg:mr-2 lg:mb-2 md:mb-2 hover:bg-[#FF4200] hover:border-[#FF4200]"
            >
              Daftar
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
