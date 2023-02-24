import styled from '@emotion/styled';
import Link from 'next/link';

const StyledDiv = styled.div`
  background: ${props =>
    props.banner
      ? 'url(' +
        process.env.NEXT_PUBLIC_API_STORAGE_URL +
        '/' +
        props.banner.replace('public/', '') +
        ')'
      : '#FEFEFE'};
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HandicraftBanner = ({ banners }) => {
  return (
    <div className="sm:mx-12 sm:my-4 handicraft">
      <StyledDiv
        banner={banners}
        className="handicraft-content lg:min-h-[410px] min-h-[115px]"
      >
        <div className="container sm:pl-8 pl-4 sm:pr-4 flex justify-between">
          <p className="sm:text-[2.5rem] text-stone-700 font-bold">
            Karya Anak Bangsa
          </p>
          <Link
            type="button"
            href={'/product/handicraft'}
            className="text-[#FF4200] font-bold text-sm sm:text-[1.3rem] px-5 py-[15px] text-center sm:mr-2 mb-3 sm:mb-2"
          >
            Lihat Semua
          </Link>
        </div>
      </StyledDiv>
    </div>
  );
};
