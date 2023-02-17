const StyledDiv = styled.div`
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 30%;
  right: 0;
  z-index: 1;
  background: ${props =>
    props.banner
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0), #FEFEFE), url(' +
        process.env.NEXT_PUBLIC_API_STORAGE_URL +
        '/' +
        props.banner.replace('public/', '') +
        ')'
      : '#FEFEFE'};
  background-size: cover;
  background-repeat: no-repeat;
`;

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
