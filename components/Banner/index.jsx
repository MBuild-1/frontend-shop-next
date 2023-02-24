import Image from 'next/image';

const Banner = ({ src, alt, ...props }) => {
  return (
    <div className="relative w-full lg:h-[300px] h-[100px]" {...props}>
      {src !== '/' + null ? (
        <Image
          src={
            process.env.NEXT_PUBLIC_API_STORAGE_URL + src.replace('public/', '')
          }
          alt={alt}
          fill
        />
      ) : (
        <div className="bg-blue-400 lg:h-[300px] h-[100px]"></div>
      )}
    </div>
  );
};

export default Banner;
