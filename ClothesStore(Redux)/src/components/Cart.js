import React from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import formatcurrency from '../utils.js';



function Cart() {

    const cart = useSelector((store) => store)
    const dispatch = useDispatch();
    // const addition = (acc, currentvalue) => {
    //     return acc + currentvalue.price * currentvalue.quantity
    // }
    // const totalprice = cart.reduce(addition, 0)
    const totalprice = cart.reduce((a, c) => a + c.price * c.quantity, 0)
    return (
        <>
            <Navbar />
            <div className='cart'>
                {
                    cart.map((index) => {
                        const { id, title, image, price } = index;
                        return (
                            <div className='cart-product' key={id}>
                                <img src={image} alt={title} />
                                <div className='products-detail'>
                                    <h3>{title}</h3>
                                    <p> قیمت : {formatcurrency(price)}</p>
                                    <div className='changequantity'>
                                        <button onClick={() => dispatch({ type: "INCREASE", payload: index })}>+</button>
                                        <span>تعداد : {index.quantity}</span>
                                        <button onClick={() => {
                                            if (index.quantity > 1) {
                                                dispatch({ type: "DECREASE", payload: index })
                                            } else {
                                                dispatch({ type: "REMOVE", payload: index })
                                            }
                                        }}>-</button>
                                    </div>

                                    <span>قیمت کل: {formatcurrency(price * index.quantity)}</span>
                                </div>
                                <button className='delete-btn' onClick={() => dispatch({ type: "REMOVE", payload: index })}>حذف از سبد خرید</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className='totalprice'>
                {cart.length < 1 ? <p> هیچ محصولی در سبد خرید ندارید</p> : <p> مجموع قیمت کل سفارشات : {formatcurrency(totalprice)}</p>}
            </div>
        </>
    )
}

export default Cart