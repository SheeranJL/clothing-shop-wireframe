import React from 'react';
import './search-and-cart.scss';

import SearchBar from '../../reusables/search-bar/search-bar.js';
import Cart from '../../reusables/cart/cart.js';

const SearchAndCart = () => {

  return (
    <div className='search-and-cart-container'>

        <img src='http://automationpractice.com/img/logo.jpg' />
        <SearchBar />
        <Cart />

    </div>
  )
}

export default SearchAndCart;
