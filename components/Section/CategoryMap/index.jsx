import Indonesia from '@svg-maps/indonesia';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

export const CategoryMap = () => {
  return (
    <div className="mx-12 my-4">
      <p className="text-[1.7rem] py-2 w-[25%] font-semibold border-b-[0.2rem] border-[#FF4200]">
        Keliling Daerah Nusantara
      </p>
      <div className="my-8">
        <SVGMap map={Indonesia} />
      </div>
    </div>
  );
};
