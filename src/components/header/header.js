import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss';

const Header = () => {

  return (
    <div className='header-container'>

      <div className='promotion-banner'>
        <img src='http://automationpractice.com/modules/blockbanner/img/sale70.png' />
      </div>

      <div className='navigation-header'>

        <span className='contact-info-header'>
          <p className='phone-image'>☏</p>
          <p className='call-us-now'>Call us now:</p>
          <p className='phone-number'>0123-456-789</p>
        </span>

        <div className='banner-links'>
          <div className='contact-us-link'>
            <Link to='/contact'>Contact us</Link>
          </div>

          <div className='signin-link'>
            <Link to='/signin'>Sign in</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;
