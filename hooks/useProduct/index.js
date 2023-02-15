import { getProducts, productSelectors } from '@/redux/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useProduct = () => {
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts()).unwrap();
  }, [dispatch]);

  return { products };
};
