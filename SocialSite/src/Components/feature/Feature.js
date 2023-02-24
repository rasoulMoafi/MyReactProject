import React, { useEffect } from 'react';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import './Feature.css';
import photo from '../../images/featureImage-removebg-preview.png';
import { FeaturesList } from './data.js';
import { BsHexagon } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])
  return (
    <section id='features' data-aos="flip-right">
      <div className="title">
        <BsFillBookmarkStarFill color='orangered' size='30' />
        <h2>ویژگی های اصلی</h2>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
      </div>
      <div className='features-content'>
        <div className='feature-right'>
          <img src={photo} />
        </div>
        <div className='feature-left'>
          <ul className='list'>
            {
              FeaturesList.map((feature) => {
                const { id, icon, heading, text } = feature;
                return (
                  <li key={id} className='listelement'>
                    <div className='listicon'>
                      <BsHexagon color='#fc5412' size='55' />
                      <div className='innericon'>
                        {icon}
                      </div>

                    </div>
                    <div className='listtext'>
                      <h3>{heading}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Feature