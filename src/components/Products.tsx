import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../AppRedux/store/store';
import { Product } from '../typings.t';
import ProductCard from './ProductCard';
import { Scaleloader } from '../utilities/loaders';
import { getProducts } from '../AppRedux/actions/Products';

const Products = () => {
  const [products, setProducts] = useState<Product[]>();
  const dispatch: AppDispatch = useDispatch();
  const {
    getProductsBegin,
    getProductsSuccessData,
    getProductsFailureData,
  }: any = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (getProductsSuccessData) {
      setProducts(getProductsSuccessData);
    }
    if (getProductsFailureData) {
      toast.error(
        getProductsFailureData?.message || 'Something went wrong! Try again'
      );
    }
  }, [getProductsSuccessData, getProductsFailureData]);

  return (
    <div className='pageWidth my-6'>
      <h1 className='text-black font-bold text-3xl'>Products</h1>
      {getProductsBegin ? (
        <Scaleloader />
      ) : (
        <div className='grid grid-cols-1 500px:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 my-10'>
          {products?.map((data) => (
            <ProductCard key={data.id} data={data} cartPage={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
