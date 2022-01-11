import React from 'react';
import './frontpage.scss';

import SearchAndCart from './search-and-cart/search-and-cart.js';
import StoreNav from '../reusables/store-navigation/store-nav.js';

const FrontPage = () => {

  return (
    <div classname='front-page-container'>

    <SearchAndCart />

    <StoreNav />


    </div>
  )
}

export default FrontPage;
