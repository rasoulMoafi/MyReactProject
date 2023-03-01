import React, { useContext } from 'react';
import { DataContext } from '../Context.js';
import formatCurrency from '../util.js';
import './Cart.css';

const Cart = () => {

  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const amountChange = value.amountChange;

  const total = cart.reduce((a, c) => a + c.price * c.count, 0)
  return (
    <>
      {
        cart.length < 1 ? <p className='emptycart'>سبد خرید خالی است</p> : cart.map((product) => {
          const { _id, images, title, price, content, count } = product;
          return (
            <div className='carts' key={_id}>
              <div className='cartimg' style={{ backgroundImage: `url(${images[0]})` }}></div>
              <div className='box-cart'>
                <h2>{title}</h2>
                <p>{content}</p>

                <div className='amount'>
                  <p>تعداد محصول</p>
                  <div className='buttons'>
                    <button onClick={() => { amountChange('INCREASE', product) }}>+</button>
                    <span>{count}</span>
                    <button onClick={() => { amountChange('DECREASE', product) }}>-</button>
                  </div>
                </div>
                <h3> قیمت محصول: {formatCurrency(price)}</h3>

                <h3> قیمت کل محصول: {formatCurrency(price * count)}</h3>
                <button className='removebtn' onClick={() => { amountChange('REMOVE', product) }}>حذف از سبد خرید</button>
              </div>
            </div>
          )
        })
      }
        {
          cart.length < 1 ? <p></p> : <div className='total'>
            <p className='totalprice'>مجموع قیمت کل سبد: {formatCurrency(total)}</p>
            <button className='payment'>پرداخت</button>
          </div>

        }

    </>
  )
}

export default Cart