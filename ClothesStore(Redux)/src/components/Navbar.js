import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
    const cart = useSelector((store) => store)
    return (
        <>
            <nav>
                <div className='navbar'>
                    <Link to="/">خانه</Link>
                    <Link to="/Cart">
                        <div className='notification'>{cart.length}</div>
                        سبد خرید
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar