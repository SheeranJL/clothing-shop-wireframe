import React, {useState} from 'react';
import './cart.scss';

const Cart = () => {

  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className='cart-container'>
      <span classname='cart-logo'>&#x1f6d2;</span>
      <span className='cart-info cart-name'>Cart</span>
      <span className='cart-info cart-status'>(empty)</span>

      <span className='cart-arrow-symbol'
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        {mouseOver === false ? <p>&#9650;</p> : <p>&#9660;</p>}
      </span>

    </div>
  )

}

export default Cart;
