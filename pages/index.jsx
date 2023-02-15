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
  ReelsSlider,
  SeasonsBanner,
  ShippingReview,
  SnackCategory,
  ViralCategory,
} from '../components';

export async function getStaticProps() {
  const getBannerHomepage = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/banner/Homepage',
  );
  const getCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/category',
  );
  const getBrand = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/brand',
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

  const bannerHomepageJSON = await getBannerHomepage.json();
  const categoryJSON = await getCategory.json();
  const brandJSON = await getBrand.json();
  const viralCategoryJSON = await getViralCategory.json();
  const snackCategoryJSON = await getSnackCategory.json();
  const coffeeTeaCategoryJSON = await getCoffeeTeaCategory.json();
  const recommendCategoryJSON = await getRecommendCategory.json();
  const provinceMapJSON = await getProvinceMap.json();

  const bannerHomepage = await bannerHomepageJSON.data;
  const category = await categoryJSON.data;
  const brand = await brandJSON.data;
  const viralCategory = await viralCategoryJSON.data;
  const snackCategory = await snackCategoryJSON.data;
  const coffeeTeaCategory = await coffeeTeaCategoryJSON.data;
  const recommendCategory = await recommendCategoryJSON.data;
  const provinceMap = await provinceMapJSON.data;

  return {
    props: {
      bannerHomepage,
      category,
      brand,
      viralCategory,
      snackCategory,
      coffeeTeaCategory,
      recommendCategory,
      provinceMap,
    },
    revalidate: 300,
  };
}

export default function Home(props) {
  const {
    bannerHomepage,
    category,
    brand,
    viralCategory,
    snackCategory,
    coffeeTeaCategory,
    recommendCategory,
    provinceMap,
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
        <KitchenBanner />
        <SnackCategory snacks={snackCategory} />
        <SeasonsBanner />
        <ReelsSlider />
        <HandicraftBanner />
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
