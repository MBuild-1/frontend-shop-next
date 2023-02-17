import { useCategoryMap } from '@/hooks';
import styled from '@emotion/styled';
import { Tooltip } from 'flowbite-react';
import CategoryMapFooter from './CategoryMapFooter';
import CategoryMapHeader from './CategoryMapHeader';
import CategoryMapIcon from './CategoryMapIcon';

const SVGBox = styled.svg`
  & g:hover path {
    fill: #ff4200;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
    height: 200px;
  }
`;

const StyledDiv = styled.div`
  &::before {
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
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40%;
    right: 0;
    z-index: 1;
    background: ${props =>
      props.bckgrnd
        ? 'linear-gradient(to top, rgba(255, 255, 255, 0), #FEFEFE), url(' +
          process.env.NEXT_PUBLIC_API_STORAGE_URL +
          '/' +
          props.bckgrnd.replace('public/', '') +
          ')'
        : '#FEFEFE'};
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const CategoryMap = ({ provinces }) => {
  const { select, handleClick } = useCategoryMap(provinces);
  return (
    <div className="lg:mx-12 lg:my-4">
      {select ? (
        <>
          <StyledDiv
            bckgrnd={select.background}
            banner={select.banner_desktop}
            className="relative"
          >
            <CategoryMapHeader />
            <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] py-4">
              <div className="flex relative items-center justify-center lg:order-1 order-last">
                <CategoryMapIcon
                  src={select.icon}
                  alt={'Icon Province' + select.name}
                />
              </div>
              <div className="lg:order-2">
                <SVGBox
                  width="1000"
                  height="357"
                  viewBox="0 0 1000 357"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {provinces.map((item, index) => (
                    <g
                      title={item.name}
                      id={item.name}
                      cursor="pointer"
                      onClick={() => handleClick(item.id)}
                    >
                      {item.province_map.map(({ svg }, i) => (
                        <path
                          key={i}
                          d={svg}
                          fill={item.id === select.id ? '#FF4200' : '#D1D3D9'}
                        />
                      ))}
                    </g>
                  ))}
                </SVGBox>
              </div>
            </div>

            <CategoryMapFooter label={select.name} product={select.product} />
          </StyledDiv>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
