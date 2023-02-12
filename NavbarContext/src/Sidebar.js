import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Links } from './data';
import {useGlobalContext} from './context';


function Sidebar() {
    const {isOpenSidebar,closeSidebar } = useGlobalContext();
  return (
      <div>
          <aside className={ `${isOpenSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
              <div className='sidebar-header'>
                  <button className='close-btn' onClick={closeSidebar}>
                      <FaTimes/>
                  </button>
              </div>

              <ul className='list'>
                  {
                      Links.map((link) => {
                          const { id, url, text, icon } = link;
                          return(
                              <li key={id}>
                                    <a href={url}>{icon} {text}</a>
                              </li>
                          )
                      })
                  }
              </ul>
          </aside>
    </div>
  )
}

export default Sidebar