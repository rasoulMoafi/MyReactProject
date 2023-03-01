import React, { useContext } from 'react';
import { DataContext } from '../Context.js';
import { Link } from 'react-router-dom';
import './Products.css';
import formatCurrency from '../util.js'


function Products() {
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const addCart = value.addCart;
    return (
        <div className='Products'>
            {
                products.map((product) => {
                    const { _id, title, images, description, price } = product;
                    return (
                        <div className='productdetail' key={_id}>
                            <Link to={`/products/:${_id}`}>
                                <img src={images[0]} alt={title} />
                            </Link>
                            <div className='producttext'>
                                <Link to={`/products/:${_id}`}>{title}</Link>
                                <p>{description}</p>
                                <p className='productprice'>{formatCurrency(price)}</p>
                                <button onClick={() => { addCart(_id) }}>اضافه کردن به سبد خرید</button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default Products