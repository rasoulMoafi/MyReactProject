import React from 'react';

export default function Categories({ filterItems, itemCategory }) {
    return (
      
        <div className='d-flex justify-content-center my-3'>


          {/* <button className='btn border-none bg-body text-danger ' onClick={()=> filterItems('همه')}>همه</button>
          <button className='btn border-none bg-body text-danger ' onClick={()=> filterItems('لپ تاپ')}>لپ تاپ</button>
          <button className='btn border-none bg-body text-danger ' onClick={()=> filterItems('مردانه')}>مردانه</button>
          <button className='btn border-none bg-body text-danger ' onClick={()=> filterItems('زنانه')}>زنانه</button>
          <button className='btn border-none bg-body text-danger ' onClick={()=> filterItems('بچه گانه')}>بچه گانه</button> */}
          {
              itemCategory.map((category,index) => {
                  return(
                      <button key={index } className='btn border-none text-danger m-3 btn-focus-outline-danger btn-categories' onClick={() => filterItems(category)}>{category}</button>
                  )
              })
          }
    </div>
  )
}
