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
  CategoryMap,
  MediaContent,
  RecommendCategory,
  ShippingReview,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
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
        {/* <CategoryMap /> */}
        <MediaContent />
        <RecommendCategory />
        <ShippingReview />
      </div>
      <Footer />
    </>
  );
}
