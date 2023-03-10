// eslint-disable-next-line import/extensions
import {
  loadBannerWithType,
  loadBrand,
  loadBundling,
  loadCategory,
  loadMapProvince,
  loadNews,
  loadProductIsViral,
  loadShippingReviews,
  loadYoutubeWithType,
} from '@/lib';
import Head from 'next/head';
import {
  BrandCategory,
  CategoryMap,
  CoffeTeaCategory,
  FareCheckBanner,
  Footer,
  HandicraftBanner,
  HomeCarousel,
  KitchenBanner,
  MediaContent,
  Navbar,
  ProductCategory,
  RecommendCategory,
  ShortsSlider,
  SeasonsBanner,
  ShippingReview,
  SnackCategory,
  ViralCategory,
} from '../components';

export async function getStaticProps() {
  try {
    const bannerHomepage = await loadBannerWithType('Homepage');
    const category = await loadCategory();
    const brand = await loadBrand();
    const productViral = await loadProductIsViral();
    const bannerShippingPrice = await loadBannerWithType('Shipping Price');
    const bannerKitchen = await loadBannerWithType('Kitchen');
    const bundlings = await loadBundling();
    const youtubeShorts = await loadYoutubeWithType('shorts');
    const bannerHandycrafts = await loadBannerWithType('Handycrafts');
    const mapProvince = await loadMapProvince();
    const news = await loadNews();
    const youtubeVideos = await loadYoutubeWithType('video');
    const shippingReviews = await loadShippingReviews();

    return {
      props: {
        bannerHomepage,
        category,
        brand,
        productViral,
        bannerShippingPrice,
        bannerKitchen,
        bundlings,
        youtubeShorts,
        bannerHandycrafts,
        mapProvince,
        news,
        youtubeVideos,
        shippingReviews,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Home(props) {
  const {
    bannerHomepage,
    category,
    brand,
    productViral,
    bannerShippingPrice,
    bannerKitchen,
    bundlings,
    youtubeShorts,
    bannerHandycrafts,
    mapProvince,
    news,
    youtubeVideos,
    shippingReviews,
  } = props;
  return (
    <>
      <Head>
        <title>Masterbagasi | Bringing Happiness Into Your Table!</title>
      </Head>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <HomeCarousel banners={bannerHomepage} />
        <ProductCategory categories={category} />
        <BrandCategory brands={brand} />
        <ViralCategory productViral={productViral} />
        <FareCheckBanner banners={bannerShippingPrice} />
        <KitchenBanner banners={bannerKitchen[0].image_desktop} />
        <SnackCategory productSnack={productViral} />
        <SeasonsBanner bundlings={bundlings} />
        <ShortsSlider shorts={youtubeShorts} />
        <HandicraftBanner banners={bannerHandycrafts[0].image_desktop} />
        <CoffeTeaCategory productCT={productViral} />
        <CategoryMap provinces={mapProvince} />
        <MediaContent news={news} youtubes={youtubeVideos} />
        <RecommendCategory productRecom={productViral} />
        <ShippingReview reviews={shippingReviews} />
      </div>
      <Footer />
    </>
  );
}
