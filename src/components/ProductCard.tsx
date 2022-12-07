import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '../AppRedux/store/store';
import { Product } from '../typings.t';
import { MinusIcon, PlusIcon } from '../utilities/svg';
import {
  addProduct,
  AddProductCount,
  removeProduct,
  subtractProductCount,
} from '../AppRedux/actions/Products';

const ProductCard = ({
  data,
  cartPage,
}: {
  data: Product;
  cartPage: boolean;
}) => {
  const {
    id,
    image,
    title,
    description,
    rating: { rate },
    count,
  } = data;
  const dispatch: AppDispatch = useDispatch();
  const { cartItems }: { cartItems: Product[] } = useSelector(
    (state: RootState) => state.products
  );
  const isInCart = cartItems.find((product) => product.id === id);

  return (
    <div className='relative mb-[150px]'>
      <div>
        <img
          src={image}
          alt='ProductImage'
          className='shadow-2xl h-72 w-full'
        />
      </div>
      <div className='bg-white min-h-[200px] w-[84%] shadow-lg ml-[8%] px-3 py-4 absolute bottom-0 transform translate-y-3/4'>
        <h1 className='text-lg text-black font-bold mb-2 text-ellipsis overflow-hidden whitespace-nowrap'>
          {title}
        </h1>
        <p className='text-gray-800 text-lg twoLineContent'>{description}</p>
        <p className='text-primary my-2 text-lg font-semibold'>Rs. {rate}</p>
        {cartPage ? (
          <button className='w-full bg-primary text-white font-bold text-lg py-2 flex items-center justify-around'>
            <MinusIcon
              className='fill-white w-5 h-5 transition1'
              onClick={() =>
                count === 1
                  ? dispatch(removeProduct(id))
                  : dispatch(subtractProductCount(id))
              }
            />
            {count}
            <PlusIcon
              className='fill-white w-5 h-5 transition1'
              onClick={() => dispatch(AddProductCount(id))}
            />
          </button>
        ) : (
          <button
            className={`w-full text-white font-bold text-lg py-2 transition1 ${
              isInCart ? 'bg-red-800' : 'bg-primary'
            }`}
            onClick={() =>
              isInCart
                ? dispatch(removeProduct(id))
                : dispatch(addProduct(data))
            }
          >
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
