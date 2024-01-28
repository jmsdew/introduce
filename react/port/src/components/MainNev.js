import React from 'react';
import '../css/MainNev.css';
import { NavLink } from 'react-router-dom';
const MainNev= () =>{

  const styles = {
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontSize: '1.2rem',
    textDecoration : 'none',
    color:'black'
  }
  
  return (
    <>
      <header className='nevBox'>
        <div className='main-h1'>
          <NavLink className='mainPage' to={"/"}>MSJ</NavLink>
        </div>

          <ul className='main-ul'>
            <li><NavLink  to={"/About"} className='nav' style={styles}>About</NavLink></li>
            <li>|</li>
            <li><NavLink  to={"/Project"} className='nav' style={styles}>Projects</NavLink></li>
            <li>|</li>
            <li><NavLink  to={"/Contact"} className='nav' style={styles}>Contact</NavLink></li>
          </ul>
      </header>
    </>
  )

}

export default MainNev;