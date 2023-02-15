import Image from 'next/image';

const CategoryMapIcon = ({ src, alt, ...props }) => {
  return (
    <div
      className="lg:flex relative lg:bottom-0 bottom-6 w-full lg:h-[320px] h-[230px] items-center justify-center"
      {...props}
    >
      {src ? (
        <Image
          src={
            process.env.NEXT_PUBLIC_API_STORAGE_URL +
            '/' +
            src.replace('public/', '')
          }
          alt={alt}
          width={500}
          height={500}
        />
      ) : (
        <p className="text-xl">Icon Tidak Tersedia</p>
      )}
    </div>
  );
};

export default CategoryMapIcon;
