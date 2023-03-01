import React, { useContext, useState } from 'react';
import { DataContext } from '../Context.js';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import './Header.css';




const Header = () => {



    const [showNavbar, setShowNavbar] = useState(false);


    const value = useContext(DataContext);
    const [cart] = value.cart;


    return (
        <header>
            <div className='menu'>
                <button className='menuButton' onClick={() => setShowNavbar(!showNavbar)}>
                    {
                        showNavbar ? <RiCloseLine /> : <AiOutlineBars />
                    }
                </button>
            </div>
            <ul id={showNavbar ? 'openMenu' : 'closeMenu'}>
                <li><Link to="/">خانه</Link></li>
                <li><Link to="/products">محصولات</Link></li>
                <li><Link to="/">درباره ما</Link></li>
                <li><Link to="/">تماس با ما</Link></li>
                <li><Link to="/">ثبت نام</Link></li>
                <li><Link to="/">ورود</Link></li>
            </ul>
            <div className='cart-icon'>
                <span>{cart.length}</span>
                <Link to="/cart">
                    <FaShoppingBag color={'#2dcddf'} size={22} />
                </Link>
            </div>

        </header>
    )
}

export default Header