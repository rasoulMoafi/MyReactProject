import React from 'react';
import Navbar from './Navbar';
import { Data } from '../data.js';
import { useSelector, useDispatch } from 'react-redux';
import formatcurrency from '../utils.js';


function Home() {
    const cart = useSelector((store) => store)
    // console.log(cart)
    const dispatch = useDispatch();
    return (
        <>
            <Navbar />
            <div className='products'>
                {
                    Data.map((index) => {
                        index.quantity = 1;
                        const { id, title, image, price } = index;
                        return (
                            <div className='product' key={id}>
                                <img src={image} alt={title} />
                                <div className='products-detail'>
                                    <h3>{title}</h3>
                                    <p>{formatcurrency(price)}</p>
                                </div>
                                <button onClick={() => dispatch({ type: "ADD", payload: index })}>افزودن به سبد خرید</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home