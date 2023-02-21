import React from 'react';
import formatCurrency from '../utils';


function Products({ items, addProducts }) {
  return (
    <div className='col-md-8'>
        <ul className='products d-flex flex-wrap justify-content-around mt-5'>
          {
            items.map((item) => {
              const { id, title, image, price } = item;
              return (
                <li className='product text-center' key={id}>
                  <img className='product-img' src={image} alt={title}></img>
                  <p className='m-1'>{title}</p>
                  <div className='price d-flex justify-content-around my-3'>
                    <button className='btn btn-outline-danger text-denger rounded p-1' onClick={() => addProducts(item)}>افزودن به سبد خرید</button>
                    <p className='text-success'>{formatCurrency(price)}</p>
                  </div>
                </li>
              )
            })

          }
        </ul>
    </div>
  )
}

export default Products