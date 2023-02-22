import Image from 'next/image';
import DefaultAvatar from '../../images/default-avatar.jpg';

const CardReview = ({ avatar, title, message, name, region }) => {
  return (
    <div className="card-review mx-4 border-2 sm:mt-6 mt-2">
      <div className="flex justify-between">
        <div className="border-2 border-white">
          <Image
            src={
              avatar
                ? process.env.NEXT_PUBLIC_API_STORAGE_URL +
                  '/' +
                  avatar.replace('public/', '')
                : DefaultAvatar
            }
            alt={'avatar'}
            width={300}
            height={300}
          />
        </div>
        <div className="py-2 sm:px-5 px-1 text-justify bg-white">
          <p className="text-[#FF4200] font-semibold text-xs sm:text-xl">
            {title}
          </p>
          <div className="sm:my-2 mt-2">
            <p className="text-xs sm:text-base">{message}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="flex">
              <p className="sm:text-base text-sm">{name}</p>
              <span className="px-2 sm:text-base text-sm">-</span>
              <p className="sm:text-base text-sm">{region}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
