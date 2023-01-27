import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Links, Socials } from './data';

function App() {

  const [showList, setShowList] = useState(false);
  const ListContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    const linkHeight1 = ListContainerRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    console.log(linkHeight1);
    if (showList) {
      ListContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      ListContainerRef.current.style.height = "0px";
    }
  }, [showList]);



  return (
    <div className="container">
      <div className="hamburgerIcon">
        <button className='nav-btn' onClick={() => setShowList(!showList)}>
          {
            showList ? <FaTimes /> : <FaBars />
          }
        </button>
      </div>



      {/* 
      
      ================= this is first way to show and hidden button (by just a function) ============== 

      {
        showList &&
        <div className="nav-links">
          <ul className='list'>
            {
              Links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      } */}

      {/* ================= this is second way to do that (by playing whit height)=============== 

      <div className="nav-links">
        <ul className={`${showList ? 'list active' : 'list'}`}>
          {
            Links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>*/}

      {/* =====================this way use from useRef hook for this problem================== */}
      <div className="nav-links" ref={ListContainerRef}>
        <ul className='list' ref={linkRef}>
          {
            Links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="nav-social">
        <ul className='social-list'>
          {
            Socials.map((social) => {
              const { id, url, icon } = social;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>

    </div>
  );
}

export default App;
