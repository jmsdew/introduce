import React from 'react';
import './css/Footers.css';

const Footers = ({styles}) => {

  return (
    <>
      <div className='footers' style={styles}>
        <div className='madeBy' style={styles}>
          <p>ⓒ 2024 by minsikjung</p>
        </div>
        <div className='bottom' ></div>
      </div>
    </>
  )
}





export default Footers;