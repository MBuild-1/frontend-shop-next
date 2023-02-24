import { CryptoJSAesDecrypt } from './cryptoJS';

// Banner With Type
export async function loadBannerWithType(type) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/banner/' + type,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Category
export async function loadCategory() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/category',
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Brand
export async function loadBrand() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/brand',
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Product Viral
export async function loadProductIsViral() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/is_viral/20',
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Product Snack
// export async function loadProductSnack() {
//   const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/web/product');

//   const json = await res.json();
//   const data = CryptoJSAesDecrypt(await json.data);

//   return data;
// }

// Bundling Season
export async function loadBundling() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/web/bundling');

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Youtube with Type
export async function loadYoutubeWithType(type) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/youtube/type/' + type,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Map by province
export async function loadMapProvince() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/province/explore/map',
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// News
export async function loadNews() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/web/news');

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Shipping Reviews
export async function loadShippingReviews() {
  const data = [
    {
      avatar: null,
      title: 'Cepet Banget Sampainya!!',
      message:
        'Indonesia Korea Selatan, awalnya luamayan deg degan, karna this is my first time experience sama Master Bagasi. Tapi ternyata cepat banget sampainyaa hihi',
      name: 'Ciya',
      region: 'Korea Selatan',
    },
    {
      avatar: null,
      title: 'Prosesnya Mudah!!',
      message:
        'Indonesia Turki, awalnya luamayan deg degan, karna this is my first time experience sama Master Bagasi. Tapi ternyata cepat banget sampainyaa hihi',
      name: 'Dandi',
      region: 'Turki',
    },
    {
      avatar: null,
      title: 'Murah Buangeett!!',
      message:
        'Indonesia Jepang, awalnya luamayan deg degan, karna this is my first time experience sama Master Bagasi. Tapi ternyata cepat banget sampainyaa hihi',
      name: 'Naufal',
      region: 'Jepang',
    },
  ];
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/web/news');

  // const json = await res.json();
  // const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Country
export async function loadCountry() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/v1/web/country');

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// ======================= //

// Category With Slug
export async function loadCategoryWithSlug(slug) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/category/slug/' + slug,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Brand With Slug
export async function loadBrandWithSlug(slug) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/brand/slug/' + slug,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// Product Entry with filter
export async function loadProductEntryWithFilter(filter) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/product/entry?' + filter,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}

// News With Filter
export async function loadNewsWithFilter(filter) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/v1/web/news/' + filter,
  );

  const json = await res.json();
  const data = CryptoJSAesDecrypt(await json.data);

  return data;
}
