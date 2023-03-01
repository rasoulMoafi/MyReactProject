import React, { useContext, useState, useRef } from 'react';
import { DataContext } from '../Context.js';
import { useParams } from 'react-router-dom';
import formatCurrency from '../util.js';
import './Detail.css';

const Detail = () => {
    var { id } = useParams();
    // console.log(id)
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const addCart = value.addCart;

    const [imgindex, setTmgindex] = useState(0);
    const imgDiv = useRef();

    const details = products.filter((product) => {
        return (':' + product._id) === id;
    })
    // console.log(details)

    const handlemouseMouse = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
    return (
        <>
            {
                details.map((product) => {
                    const { _id, images, title, price, colors, description, content } = product;
                    return (
                        <div className='details' key={_id}>
                            <div
                                className='detailimg'
                                style={{ backgroundImage: `url(${images[imgindex]})` }}
                                onMouseMove={handlemouseMouse}
                                ref={imgDiv}
                                onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
                            >

                            </div>
                            <div className='box-detail'>
                                <h2>{title}</h2>
                                <div className='thumb'>
                                    {
                                        images.map((img, index) => {
                                            return (
                                                <img src={img} key={index} onClick={() => setTmgindex(index)} />
                                            )
                                        })
                                    }
                                </div>
                                <h3>قیمت: {formatCurrency(price)}</h3>

                                <p>{description}</p>
                                <p>{content}</p>
                                <div className='colors'>
                                    {
                                        product && colors.map((color, index) => {
                                            return (
                                                <button key={index} style={{ background: color }}></button>
                                            )
                                        })
                                    }
                                </div>
                                <button className='productaddcartbtn' onClick={() => { addCart(_id) }}>افزودن به سبد خرید</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Detail