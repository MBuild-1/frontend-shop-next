export const KitchenBanner = ({ banners }) => {
  return (
    <div className="sm:mx-12 sm:my-4 kitchen">
      <div
        className={`kitchen-content sm:min-h-[337px] min-h-[120px]`}
        style={{
          backgroundImage: `url(
            ${
              process.env.NEXT_PUBLIC_API_STORAGE_URL +
              '/' +
              banners.replace('public/', '') +
              ')'
            }
          )`,
        }}
      >
        <div className="container sm:pl-8 pl-4 sm:pr-4 flex justify-between">
          <p className="sm:text-[2.5rem] text-stone-700 font-bold">
            Isi Dapur Indonesia
          </p>
          <button
            type="button"
            className="text-[#FF4200] font-bold text-sm sm:text-[1.3rem] px-7 py-[5px] text-center sm:mr-2 mb-3 sm:mb-2"
          >
            Lihat Semua
          </button>
        </div>
      </div>
    </div>
  );
};
