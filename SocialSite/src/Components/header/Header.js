import React, { useEffect } from 'react';
import photo from "../../images/phones.png";
import './Header.css';
import { BsMouse } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-right' data-aos="fade-right">
          <h1>
            <span className='firstspan'>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله</p>
          <div className='header-btn'>
            <buttton className="btn-dark">بیاین شروع کنیم</buttton>
            <buttton className="btn-light">چطور کار می کنیم</buttton>
          </div>
        </div>
        <div className='header-left' data-aos="fade-left">
          <img src={photo} />
        </div>
        <div className='floating-icon'>
          <a href='#features'>
            <BsMouse color='#fff' size={20} />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Header


