import { useRouter } from 'next/router';
import { useState } from 'react';
import { useProduct } from '../useProduct';

import EmptyProduct from '../../images/default-picture.jpg';

export const useProduct = () => {
  const router = useRouter();
  const { item } = router.query;
  const { products } = useProduct();
  const [detail, setDetail] = useState();
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState([]);
  const [variant] = useState([]);
  const [images, setImages] = useState([]);

  const emptyProduct = [
    {
      original: EmptyProduct.src,
      thumbnail: EmptyProduct.src,
    },
  ];

  useEffect(() => {
    const filterProduct = products.filter(product => {
      return product.slug === item;
    });
    setDetail(filterProduct[0]);
    setEntries(filterProduct[0]?.product_entry);
    setEntry(filterProduct[0]?.product_entry[0]);
    filterProduct[0]?.product_entry.map(v => {
      v.product_variant.map(vr => {
        if (vr?.name in variant) {
          if (!variant[vr?.name].includes(vr?.type)) {
            variant[vr?.name].push(vr?.type);
          }
        } else {
          variant[vr?.name] = [];
          if (!variant[vr?.name].includes(vr?.type)) {
            variant[vr?.name].push(vr?.type);
          }
        }
      });
      if (v.product_image.length !== 0) {
        setImages(oldImage => [...oldImage, v.product_image]);
      }
    });
  }, [item, products, variant]);

  return { detail, entries, entry, variant, images, emptyProduct };
};
