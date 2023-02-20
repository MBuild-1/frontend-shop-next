// eslint-disable-next-line import/extensions
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
  const getBannerHomepage = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/banner/Homepage',
  );
  const getBannerKitchen = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/banner/Kitchen',
  );
  const getBannerHandycraft = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/banner/Handycrafts',
  );
  const getCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/category',
  );
  const getBrand = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/brand',
  );
  const getViralCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/is_viral/10',
  );
  const getSnackCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/is_kitchen/10',
  );
  const getCoffeeTeaCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/is_fashionable/10',
  );
  const getRecommendCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/is_fashionable/10',
  );
  const getProvinceMap = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/province/explore/map',
  );
  // const getYoutube = await fetch(
  //   process.env.NEXT_PUBLIC_API_URL + '/v1/web/youtube',
  // );

  const bannerHomepageJSON = await getBannerHomepage.json();
  const bannerKitchenJSON = await getBannerKitchen.json();
  const bannerHandycraftJSON = await getBannerHandycraft.json();
  const categoryJSON = await getCategory.json();
  const brandJSON = await getBrand.json();
  const viralCategoryJSON = await getViralCategory.json();
  const snackCategoryJSON = await getSnackCategory.json();
  const coffeeTeaCategoryJSON = await getCoffeeTeaCategory.json();
  const recommendCategoryJSON = await getRecommendCategory.json();
  const provinceMapJSON = await getProvinceMap.json();
  // const youtubeJSON = await getYoutube.json();

  const bannerHomepage = await bannerHomepageJSON.data;
  const bannerKitchen = await bannerKitchenJSON.data;
  const bannerHandycraft = await bannerHandycraftJSON.data;
  const category = await categoryJSON.data;
  const brand = await brandJSON.data;
  const viralCategory = await viralCategoryJSON.data;
  const snackCategory = await snackCategoryJSON.data;
  const coffeeTeaCategory = await coffeeTeaCategoryJSON.data;
  const recommendCategory = await recommendCategoryJSON.data;
  const provinceMap = await provinceMapJSON.data;
  // const youtube = await youtubeJSON.data;

  return {
    props: {
      bannerHomepage,
      bannerKitchen,
      bannerHandycraft,
      category,
      brand,
      viralCategory,
      snackCategory,
      coffeeTeaCategory,
      recommendCategory,
      provinceMap,
      // youtube,
    },
    revalidate: 60,
  };
}

export default function Home(props) {
  const {
    bannerHomepage,
    bannerKitchen,
    bannerHandycraft,
    category,
    brand,
    viralCategory,
    snackCategory,
    coffeeTeaCategory,
    recommendCategory,
    provinceMap,
    // youtube,
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
        <ViralCategory virals={viralCategory} />
        <FareCheckBanner />
        <KitchenBanner banners={bannerKitchen[0].image_desktop} />
        <SnackCategory snacks={snackCategory} />
        <SeasonsBanner />
        <ShortsSlider />
        <HandicraftBanner banners={bannerHandycraft[0].image_desktop} />
        <CoffeTeaCategory cofteas={coffeeTeaCategory} />
        <CategoryMap provinces={provinceMap} />
        <MediaContent />
        <RecommendCategory recommends={recommendCategory} />
        <ShippingReview />
      </div>
      <Footer />
    </>
  );
}
