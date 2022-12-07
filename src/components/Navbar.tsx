import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { totalCartItems } from '../AppRedux/selectors/ProductSelectors';
import { RootState } from '../AppRedux/store/store';
import { OutsideClickCloseContainer } from '../utilities/OutsideClickCloseContainer';
import { ShoppingCart, UserIcon } from '../utilities/svg';

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const products = useSelector((state: RootState) => state.products);

  return (
    <div className='pageWidth flex items-center justify-between py-2'>
      <Link to='/' className='bg-primary text-white font-bold p-3 transition1'>
        Logo
      </Link>

      <div className='flexCenter gap-9'>
        <Link to='/cart' className='relative'>
          <ShoppingCart className='fill-primary w-9 h-9 transition1' />
          <div className='bg-greenOne text-white w-5 h-5 text-base rounded-xl absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 flexCenter'>
            {totalCartItems(products)}
          </div>
        </Link>

        <OutsideClickCloseContainer
          setState={() => setShowProfileDropdown(false)}
        >
          <div className='relative'>
            <UserIcon
              className='fill-primary w-9 h-9 transition1'
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            />
            {showProfileDropdown && (
              <ProfileDropdown
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
            )}
          </div>
        </OutsideClickCloseContainer>
      </div>
    </div>
  );
};

export default Navbar;

const ProfileDropdown = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className='absolute z-20 bottom-0 right-0  bg-white rounded-lg p-7 shadow-2xl translate-y-full w-[200px]'>
      {dropDownItems.map((name, index) => (
        <p
          key={index}
          className='text-primary font-bold transition1'
          onClick={() => onClick()}
        >
          {name}
        </p>
      ))}
    </div>
  );
};

const dropDownItems = ['Profile', 'Logout'];
