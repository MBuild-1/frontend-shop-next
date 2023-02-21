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
import Notification from './Notification';
import Auth from './Auth';

import DefaultAvatar from '../../../images/default-avatar.jpg';

export const Navbar = () => {
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
          <Auth />
        </div>
      </div>
    </nav>
  );
};
