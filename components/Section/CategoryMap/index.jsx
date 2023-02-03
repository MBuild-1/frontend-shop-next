import Indonesia from '@svg-maps/indonesia';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

export const CategoryMap = () => {
  return (
    <div className="sm:mx-12 sm:my-4">
      <p className="sm:text-[1.7rem] sm:py-2 sm:w-[25%] w-[52%] font-semibold border-b-[0.2rem] border-[#FF4200]">
        Keliling Daerah Nusantara
      </p>
      <div className="sm:my-8 my-4">
        <SVGMap map={Indonesia} />
      </div>
    </div>
  );
};
