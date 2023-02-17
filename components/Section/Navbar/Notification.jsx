import InboxIcon from 'images/icons/inbox/inbox-off.svg';
import BellIcon from 'images/icons/notif/lonceng-off.svg';
import CartIcon from 'images/icons/cart/cart-off.svg';
import Link from 'next/link';
import Image from 'next/image';

export default function Notification() {
  return (
    <div className="relative left-[19rem] bottom-10 md:left-0 md:bottom-0 lg:top-1">
      <ul className="flex md:border-r-2">
        <li className="lg:mr-4 md:mr-2">
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
        <li className="lg:mr-4 md:mr-1">
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
        <li className="lg:mr-4 md:mr-2">
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
  );
}
