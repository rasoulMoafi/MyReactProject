import React, { useState, useEffect } from 'react';
import { SLiderImages } from './data.js';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
import './Slider.css';


const Slider = () => {
    const [index, setIndex] = useState(0);
    console.log(SLiderImages.length)
    const checkNumber = (number) => {
        if (number < 0) {
            return SLiderImages.length - 1
        } if (number === SLiderImages.length - 1) {
            return 0
        }
        return number
    }


    const nextslide = () => {
        setIndex((index) => {
            let newindex = index + 1;
            return checkNumber(newindex)
        })

    }
    const prevslide = () => {
        setIndex((index) => {
            let newindex = index - 1;
            return checkNumber(newindex)
        })

    }

    useEffect(() => {
        let slidermove = setInterval(() => {
            setIndex(checkNumber(index + 1))
        }, 3000)
        return () => clearInterval(slidermove)
    }, [index]);
    console.log(index)

    const sliderData = SLiderImages[index];

    return (
        <div className='slider'>
            <button onClick={nextslide} className='nextbutton'>
                <BsChevronDoubleRight />
            </button>
            <img src={sliderData.images} alt={sliderData.id} className='sliderimage'></img>
            <button onClick={prevslide} className='prevtbutton'>
                <BsChevronDoubleLeft />
            </button>
        </div>
    )
}

export default Slider