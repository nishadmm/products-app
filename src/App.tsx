import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import TermsAndConditionModal from './components/TermsAndConditionModal';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('terms&conditions')) {
      const LSData = localStorage.getItem('terms&conditions');

      LSData && JSON.parse(LSData)?.accepted
        ? setShowTermsModal(false)
        : setShowTermsModal(true);
    } else {
      setShowTermsModal(true);
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {showTermsModal && (
        <TermsAndConditionModal
          state={showTermsModal}
          setState={() => setShowTermsModal(false)}
        />
      )}
    </>
  );
};

export default App;
