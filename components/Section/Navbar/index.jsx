import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import SelectLocation from './SelectLocation';
import InboxIcon from 'images/icons/inbox/inbox-off.svg';
import BellIcon from 'images/icons/notif/lonceng-off.svg';
import CartIcon from 'images/icons/cart/cart-off.svg';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import nookies from 'nookies';

import DefaultAvatar from '../../../images/default-avatar.jpg';
import Notification from './Notification';

export const Navbar = () => {
  const { user } = useSelector(state => state.user);
  const [profile, setProfile] = useState();

  useEffect(() => {
    const { token } = nookies.get();

    if (user) {
      setProfile(user);
    } else if (!user && token) {
      axios.get('/v1/web/user/profile').then(res => {
        setProfile(res.data.data);
      });
    }
  }, [user]);

  return (
    <nav className="w-full fixed z-50 -top-1 border-gray-200 px-2 py-10 lg:px-6 lg:py-3 md:px-3 md:py-3  bg-[#F8F9FA]">
      <div className="flex justify-between items-center">
        <div className="flex absolute w-full top-1 lg:top-0 lg:relative lg:w-64 lg:h-9 md:relative md:w-[16rem] lg:bottom-0">
          <Link href={'/'} passHref>
            <Image
              className="relative bottom-1"
              src={LogoMB}
              alt={'Logo Masterbagasi'}
              width={140}
              height={140}
            />
          </Link>
          <Link
            href={'#'}
            passHref
            className="relative sm:hidden left-[12.5rem] border-l-2 mt-1 px-2"
          >
            <Image
              src={CartIcon}
              alt={'cart'}
              width={35}
              height={35}
              className="cart-hover"
            />
          </Link>
          <SelectLocation />
        </div>
        <div className="relative sm:mx-3 top-1 sm:top-1 sm:left-0">
          <form action="" method="">
            <input
              type="search"
              name="search"
              placeholder="Cari barang disini..."
              className="w-[23.4rem] h-[2.5rem] lg:w-[50rem] md:w-[18rem] p-3 border-2 border-gray-300 rounded-md focus:outline-none search-input"
            />
          </form>
        </div>
        <div className="flex items-center">
          <Notification />
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
                <Link href={'/login'} passHref>
                  <button
                    type="button"
                    className="relative lg:ml-[1.5rem] md:ml-[0.8rem] mt-2 text-black font-bold border-[3px] border-[#DDDDDD] sm:border-[#DDDDDD] rounded text-sm px-4 lg:px-7 md:px-3 py-[5px] text-center mr-2 mb-2 ml-14 masuk-btn -left-[13rem] bottom-10 lg:bottom-0 md:bottom-0 lg:left-0 md:left-0"
                  >
                    Masuk
                  </button>
                </Link>
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
        </div>
      </div>
    </nav>
  );
};
