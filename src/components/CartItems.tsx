import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../AppRedux/store/store';
import { Product } from '../typings.t';
import ProductCard from './ProductCard';

const CartItems = () => {
  const { cartItems }: { cartItems: Product[] } = useSelector(
    (state: RootState) => state.products
  );

  return (
    <div className='pageWidth my-6'>
      {cartItems.length === 0 ? (
        <div className='bg-primary py-5 flexCenter flex-col gap-4'>
          <h1 className='font-bold text-2xl text-white'>
            No prodcuts in cart!
          </h1>
          <Link
            to='/'
            className='bg-white text-primary px-5 py-2 mx-auto transition1'
          >
            Go to products
          </Link>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 500px:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 my-10'>
            {cartItems?.map((data) => (
              <ProductCard key={data.id} data={data} cartPage={true} />
            ))}
          </div>

          <button className='text-white font-bold text-lg py-2 px-8 transition1 bg-primary float-right'>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItems;
