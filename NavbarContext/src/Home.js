import React from 'react';
import { FaBars } from 'react-icons/fa';
import {useGlobalContext} from './context';

function Home() {

    const {openSidebar} = useGlobalContext();
  return (
      <main>
          <button className='sidebar-button' onClick={openSidebar}>
              <FaBars />
          </button>
    </main>
  )
}

export default Home