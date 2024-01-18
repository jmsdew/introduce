import React from 'react';
import './MainNev.css';
const MainNev= ({styles}) =>{
  
  return (
    <>
      <header className='nevBox' style={styles}>
        <div className='main-h1'>
          <button className='mainPage'style={styles}>MSJ</button>
        </div>

          <ul className='main-ul'>
            <li><button className='about' style={styles}>About</button></li>
            <li>|</li>
            <li><button className='projects' style={styles}>Projects</button></li>
            <li>|</li>
            <li><button className='contact' style={styles}>Contact</button></li>
          </ul>
      </header>
    </>
  )

}

export default MainNev;