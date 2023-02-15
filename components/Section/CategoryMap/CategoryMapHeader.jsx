const CategoryMapHeader = ({ ...props }) => {
  return (
    <div
      className="flex lg:inline-block relative z-10 items-center justify-center lg:px-20 px-5 lg:py-14 py-10 bg-gradient-to-br bg-opacity-5 lg:rounded-br-full from-[#0F0F0F]"
      {...props}
    >
      <p className="lg:text-3xl text-xl text-center text-white font-semibold">
        Selamat Datang <br /> di Nusantara
      </p>
    </div>
  );
};

export default CategoryMapHeader;
