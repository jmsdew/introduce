import React from 'react';
import '../css/Introduce.css';
import { NavLink } from 'react-router-dom';

const Introduce = () => {
  const url = 'https://github.com/jmsdew';

  const styles ={
      border: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      color:'black',
      textDecoration : 'none',
      fontSize:'1.2rem'
  
  }

  return (
    <>
      <div className='intro'>
          <div className='myPhoto'>
            <img src={require("../image/photo.jpg")} className='introPhoto'/>
          </div>
          <div className='lines'></div>
          <div className='introMent'>
            <h2>JUNG MIN SIK</h2>
            <div className='introLine'></div>
            <p>우직하게 노력하는 백엔드 개발자 입니다.</p>
          </div>
          <div className='neviBotton'>
            <ul>
              <li><NavLink to={"/About"} className='nav-about' style={styles}>About</NavLink></li>
              <li>|</li>
              <li><NavLink to={"/Project"} className='nav-projects' style={styles}>Projects</NavLink></li>
              <li>|</li>
              <li><NavLink to={"/Contact"} className='nav-contact' style={styles}>Contact</NavLink></li>
            </ul>
          </div>
        <div className='email'>
          <h3>Email</h3>
          <p>jmsdew123@gmail.com</p>
        </div>
        <div className='gitHub'>
          <h3>Github</h3>
          <p><button className='git' onClick={()=>{window.open(url)}}>https://github.com/jmsdew</button></p>
        </div>
      </div>
      
    </>
  )

}

export default Introduce;