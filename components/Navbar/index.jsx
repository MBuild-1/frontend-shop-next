import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import LocationIcon from 'images/icons/location-off.svg';
import InboxIcon from 'images/icons/inbox/inbox-off.svg';
import BellIcon from 'images/icons/notif/lonceng-off.svg';
import CartIcon from 'images/icons/cart/cart-off.svg';

export const Navbar = () => {
  return (
    <nav className="w-full fixed z-50 -top-1 border-gray-200 px-2 py-10 sm:px-6 sm:py-3  bg-[#F8F9FA]">
      <div className="flex justify-between items-center">
        <div className="flex absolute w-full top-1 sm:relative sm:w-64 sm:h-9 sm:bottom-0">
          <Link href={'/'} passHref>
            <Image src={LogoMB} alt={'Logo Masterbagasi'} />
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
          <Link
            className="relative group top-24 -left-[11rem] sm:top-0 sm:left-0"
            href={'#'}
            passHref
          >
            <div className="flex relative items-center">
              <Image
                src={LocationIcon}
                alt={'location'}
                width={25}
                height={25}
              />
              <div className="flex sm:flex-col gap-2 sm:gap-0 items-center sm:items-start">
                <p className="text-[0.7rem] text-[#898989] group-hover:text-black">
                  Dikirim ke
                </p>
                <p className="sm:text-[1rem] font-bold text-[#898989] group-hover:text-[#FF4200]">
                  Pilih Negara
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative sm:mx-3 top-1 sm:top-0 sm:left-0">
          <form action="" method="">
            <input
              type="search"
              name="search"
              placeholder="Cari barang disini..."
              className="w-[95vw] h-[2.5rem] sm:w-[50rem] sm:h-[2.5rem] p-3 border-2 border-gray-300 rounded-md search-input"
            />
          </form>
        </div>
        <div className="flex items-center">
          <div className="relative left-[19rem] bottom-10 sm:left-0 sm:bottom-0">
            <ul className="flex sm:border-r-2">
              <li className="mr-4">
                <Link href={'#'} passHref>
                  <Image
                    src={InboxIcon}
                    alt={'message'}
                    width={35}
                    height={35}
                    className="inbox-hover hidden md:block"
                  />
                </Link>
              </li>
              <li className="mr-4">
                <Link href={'#'} passHref>
                  <Image
                    src={BellIcon}
                    alt={'notif'}
                    width={35}
                    height={35}
                    className="notif-hover hidden md:block"
                  />
                </Link>
              </li>
              <li className="mr-4">
                <Link href={'#'} passHref>
                  <Image
                    src={CartIcon}
                    alt={'cart'}
                    width={35}
                    height={35}
                    className="cart-hover"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="relative ml-[2rem] mt-2 text-black font-bold border-[3px] border-[#DDDDDD] sm:border-[#DDDDDD] rounded text-sm px-4 sm:px-7 py-[5px] text-center mr-2 mb-2 masuk-btn -left-[14rem] bottom-10 sm:bottom-0 sm:left-0"
          >
            Masuk
          </button>
          <button
            type="button"
            className="hidden md:block mt-2 text-white bg-[#B3B3B3] font-bold border-[3px] border-[#B3B3B3] rounded text-sm px-7 py-[5px] text-center mr-2 mb-2 hover:bg-[#FF4200] hover:border-[#FF4200]"
          >
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
};
