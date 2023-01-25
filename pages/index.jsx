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
    </>
  );
}
