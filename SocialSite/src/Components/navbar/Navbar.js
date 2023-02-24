import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import './Navbar.css';

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(true);
  return (

    <div className='navbar container'>
      <div className='menu-icon' onClick={() => { setShowIcon(!(showIcon)) }}>
        {
          showIcon ? <AiOutlineBars /> : <RiCloseLine />
        }
      </div>
      <div className='menu'>
        <ul className={showIcon ? 'nav-link' : 'nav-link mobile'}>
          <li> <a href='#header'>خانه</a> </li>
          <li> <a href='#features'>آموزش</a> </li>
          <li> <a href='#faq'>امکانات</a> </li>
          <li> <a href='#download'>دانلود</a> </li>
          <li> <a href='#subscribe'>مشترک شوید</a> </li>
        </ul>
      </div>
      <div className='logo'>
        <p className='logo-text'><span>X</span><SiAnaconda color='#fff' size={40} /></p>
        <p className='logo-social'>Social</p>
      </div>

    </div>
  )
}

export default Navbar