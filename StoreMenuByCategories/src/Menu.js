import React from 'react'

export default function Menu({menu}) {
  return (
      <div className='section-center'>
          <ul className='d-flex flex-wrap justify-content-around'>
          {
              menu.map((item) => {
                  const { id, category, price, img, desc } = item;
                  return (
                      <li key={id}>
                          
                          <img src={img} alt={category} />
                          <div className='d-flex justify-content-between align-items-baseline p-2'>
                              <h3>{category}</h3>
                              <p>{price}</p>
                          </div>
                          <p className='text-justify'>{desc}</p>
                      </li>
                  )
              })
              }
              </ul>
    </div>
  )
}
