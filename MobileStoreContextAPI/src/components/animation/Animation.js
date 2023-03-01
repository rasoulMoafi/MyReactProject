import React, { useState } from 'react';
import './Animation.css';
import OnlineShopping from './Images/Online-Shopping.svg';
import OnlineStore from './Images/Online-Store-Open-English.svg';
import deliveryBoy from './Images/unnamed.png';
import parcel from './Images/parcel.png';

const Delivery = () => {
    const [sending, setSending] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    console.log(moveBackward)
    return (
        <div className='delivery-detail'>
            <div className='deliverybtn'>
                <button className='sendbtn' onClick={() => setSending(!sending)}>ارسال </button>
                <button className='getchbtn' onClick={() => setMoveBackward(!moveBackward)}> تحویل </button>
            </div>

            <div className='delivery-items'>

                {
                    moveBackward ? <div className='shoppingpackage'>
                        <img src={OnlineShopping} className="shopping-img" alt='OnlineShopping'></img>
                        <img src={parcel} className="parcel-img" alt='parcel'></img>
                    </div> : <div className='shoppingpackage'> <img src={OnlineShopping} className="shopping-img" alt='OnlineShopping'></img> </div>
                }

                <img src={deliveryBoy} className={moveBackward ? "backward" : "deliveryBoy"} id={sending ? 'moveforward' : ''} alt='deliveryBoy'></img>
                <img src={OnlineStore} className="store-img" alt='OnlineStore'></img>

            </div>
        </div>

    )
}

export default Delivery