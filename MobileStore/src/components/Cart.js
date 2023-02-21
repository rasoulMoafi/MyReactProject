import React from 'react';
import formatCurrency from '../utils';

function Cart(props) {
    // console.log(props.cartItems)

    const itemPrice = props.cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemPrice;

    return (


        <div className='col-md-4 me-auto fixed-top mt-5 cart'>
            <>
                {props.cartItems.length > 0 ? <div className='show-price my-4 py-1 text-center'>شما {props.cartItems.length} محصول در سبد خرید دارید</div> : <div className='empty-price my-4 py-1 text-center'>سبد خرید خالی است</div>}

                <div className='cart-item'>

                    {

                        props.cartItems.map((item) => {
                            const { id, title, image, price, qty } = item;

                            return (

                                <div className='product-item d-flex justify-content-around' key={id}>
                                    <div className='product-detail'>
                                        <img className='cart-img' src={image} alt={title}></img>
                                        <h5>{title}</h5>
                                    </div>
                                    <div className='product-price ms-2'>
                                        <div className='price d-flex'>
                                            <div className='d-inline p-3'>
                                                <span>{formatCurrency(price)}</span>
                                            </div>
                                            <span className='qty'>{qty}خرید</span>
                                        </div>
                                        <div className='remove-item text-center'>
                                            <button className='btn btn-danger text-light w-100' onClick={() => props.removeProducts(item)}>حذف از سبد</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div >
                <div className='total-price mt-4 d-flex justify-content-center'>
                    <div className='total-text ms-2'>مجموع قیمت:</div>
                    <div className='total ms-1'>{formatCurrency(totalPrice)}</div>
                </div>




            </>
        </div >
    )
}

export default Cart