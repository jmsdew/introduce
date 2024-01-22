import React from 'react';
import './css/MainNev.css';
const MainNev= ({styles}) =>{
  
  return (
    <>
      <header className='nevBox' style={styles}>
        <div className='main-h1'>
          <button className='mainPage'style={styles}>MSJ</button>
        </div>

          <ul className='main-ul'>
            <li><button className='nav-about' style={styles}>About</button></li>
            <li>|</li>
            <li><button className='nav-projects' style={styles}>Projects</button></li>
            <li>|</li>
            <li><button className='nav-contact' style={styles}>Contact</button></li>
          </ul>
      </header>
    </>
  )

}

export default MainNev;