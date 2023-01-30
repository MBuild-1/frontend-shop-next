// eslint-disable-next-line import/extensions
import {
  Navbar,
  HomeCarousel,
  ProductCategory,
  BrandCategory,
  ViralCategory,
  FareCheckBanner,
  KitchenBanner,
  SnackCategory,
  SeasonsBanner,
  ReelsSlider,
  HandicraftBanner,
  CoffeTeaCategory,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <ProductCategory />
      <BrandCategory />
      <ViralCategory />
      <FareCheckBanner />
      <KitchenBanner />
      <SnackCategory />
      <SeasonsBanner />
      <ReelsSlider />
      <HandicraftBanner />
      <CoffeTeaCategory />
    </>
  );
}
