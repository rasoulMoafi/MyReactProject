import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ title, info }) {


    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className='mt-4 p-3 rounded-2'>
            <header className='d-flex align-items-center justify-content-between'>
                <h4>{title}</h4>
                <button className='btn btn-outline-danger rounded-5' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {
                showInfo && <p className='mt-3'>{info}</p>

            }
        </div>
    )
}

export default Question;