import React from 'react';
import './search-bar.scss';

const SearchBar = ({props, ...rest}) => {

  return (
    <div className='search-bar-container'>

      <input type='text' placeholder='search' {...rest}/>

      <div className='search-icon'>
        <span>⌕</span>
      </div>

    </div>
  )
}

export default SearchBar;
