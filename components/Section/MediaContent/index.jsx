import News from './News';
import Youtube from './Youtube';

export const MediaContent = () => {
  return (
    <div className="sm:mx-12 sm:my-4">
      <p className="sm:text-[1.7rem] sm:py-2 sm:w-[18%] w-[35%] font-semibold border-b-[0.2rem] border-[#FF4200]">
        Berita & Youtube
      </p>
      <div className="lg:grid grid-cols-2 gap-2 h-[400px]">
        <News />
        <Youtube />
      </div>
    </div>
  );
};
