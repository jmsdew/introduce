import React from 'react';
import './css/Introduce.css';

const Introduce = ({styles}) => {
  const url = 'https://github.com/jmsdew';

  return (
    <>
      <div className='intro'style={styles}>
          <div className='myPhoto'>
            <img src={require("./image/photo.jpg")} style={{width:400,height:500}}/>
          </div>
          <div className='lines'></div>
          <div className='introMent' style={styles}>
            <h2>JUNG MIN SIK</h2>
            <div className='introLine'></div>
            <p>우직하게 노력하는 백엔드 개발자 입니다.</p>
          </div>
          <div className='neviBotton'>
            <ul>
              <li><button style={styles}>About</button></li>
              <li>|</li>
              <li><button style={styles}>Projects</button></li>
              <li>|</li>
              <li><button style={styles}>Contact</button></li>
            </ul>
          </div>
        <div className='email'>
          <h3>Email</h3>
          <p>jmsdew123@gmail.com</p>
        </div>
        <div className='gitHub'>
          <h3>Github</h3>
          <p><button className='git' onClick={()=>{window.open(url)}} style={styles}>https://github.com/jmsdew</button></p>
        </div>
      </div>
      
    </>
  )

}

export default Introduce;