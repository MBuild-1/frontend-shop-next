import Image from 'next/image';
import Link from 'next/link';
import LogoMB from 'images/icons/logo.svg';
import LocationIcon from 'images/icons/location-off.svg';
import InboxIcon from 'images/icons/inbox/inbox-off.svg';
import BellIcon from 'images/icons/notif/lonceng-off.svg';
import CartIcon from 'images/icons/cart/cart-off.svg';

export function Navbar() {
  return (
    <nav className="w-full fixed z-50 top-0 border-gray-200 px-2 sm:px-4 py-2.5 bg-[#F8F9FA]">
      <div className="container flex flex-wrap items-center mx-2">
        <Link href={'/'} passHref>
          <Image
            src={LogoMB}
            alt={'Logo Masterbagasi'}
            width={140}
            height={140}
          />
        </Link>
        <Link className="group" href={'#'} passHref>
          <div className="flex flex-wrap items-center justify-center">
            <Image src={LocationIcon} alt={'location'} width={25} height={25} />
            <div className="flex flex-col">
              <p className="text-[0.7rem] text-[#898989] group-hover:text-black">
                Dikirim ke
              </p>
              <p className="text-[1rem] font-bold text-[#898989] group-hover:text-[#FF4200]">
                Pilih Negara
              </p>
            </div>
          </div>
        </Link>
        <div className="mx-3">
          <form action="" method="">
            <input
              type="search"
              name="search"
              placeholder="Cari barang disini..."
              className="w-[49rem] h-[2.4rem] p-3 border-2 border-gray-300 rounded-md search-input"
            />
          </form>
        </div>
        <div>
          <ul className="flex border-r-2">
            <li className="mr-4">
              <Link href={'#'} passHref>
                <Image
                  src={InboxIcon}
                  alt={'message'}
                  width={35}
                  height={35}
                  className="inbox-hover"
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
                  className="notif-hover"
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
        <div className="ml-[2rem] mt-2">
          <button
            type="button"
            className="text-black font-bold border-[3px] border-[#DDDDDD] rounded text-sm px-7 py-[5px] text-center mr-2 mb-2 masuk-btn"
          >
            Masuk
          </button>
          <button
            type="button"
            className="text-white bg-[#B3B3B3] font-bold border-[3px] border-[#B3B3B3] rounded text-sm px-7 py-[5px] text-center mr-2 mb-2 hover:bg-[#FF4200] hover:border-[#FF4200]"
          >
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}
