import React, { useEffect } from 'react';
import './css/Footers.css';
const Footer2 = ({styles}) => {

  const url = 'https://github.com/jmsdew';

  return (
    <>
    <div className='footer2'>
      <div className='emails' style={styles}>
        <h4>Email</h4>
        <p>jmsdew123@gmail.com</p>
      </div>
      <div className='gitHubs' style={styles}>
        <h4>Github</h4>
        <p><button className='git' onClick={()=>{window.open(url)}} style={styles}>https://github.com/jmsdew</button></p>
      </div>
    </div>
    </>
  )
}

export default Footer2;
