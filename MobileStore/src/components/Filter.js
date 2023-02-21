import React from 'react'

function Filter(props) {
    // console.log(props)
    return (
        <div className='filter col-md-8 d-flex justify-content-around mt-2'>
            <div className='result'>
                تعداد محصولات : {props.count} محصول
            </div>
            <div className='sort'>
                <div className='sort-title'>مرتب سازی بر اساس</div>
                <div className='form-checkbox d-flex'>
                    <div className='form-group m-1'>
                        <label htmlFor=''>جدیدترین محصولات</label>
                        <input type="radio" name="radiovalues" value="asc" onChange={props.sortProduts} />
                    </div>
                    <div className='form-group m-1'>
                        <label htmlFor=''>قدیمی ترین محصولات</label>
                        <input type="radio" name="radiovalues" value="desc" onChange={props.sortProduts} />
                    </div>
                </div>
            </div>
            <div className='brand'>
                برند ها
                <select className='product-select' value={props.category} onChange={props.catProducts}>
                    <option value="">همه</option>
                    <option value="samsung">سامسونگ</option>
                    <option value="huawei">هواوی</option>
                    <option value="iphone">آیفون</option>
                    <option value="blackberry">موتورولا</option>
                    <option value="lg">ال جی</option>
                    <option value="sony">سونی</option>
                </select>
            </div>
        </div>
    )
}

export default Filter