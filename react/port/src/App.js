import React from 'react';
import MainNev from './MainNev';
import Introduce from './Introduce';
import Footers from './Footers';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import './App.css';
const {useState} = React;

function App() {
  const [isOn, setIsOn] = useState(true);
  const [color, setColor] = useState('black');

  const styles = {
    backgroundColor:isOn? 'white':'#29292a',
    color:isOn? 'black':'white'
  }

  const darkMode = ()=>{
    setIsOn(!isOn);
    
  }
  const set = isOn? <FaToggleOn size="50" /> : <FaToggleOff size="50"/>
 
  return (
    <> 
      <div style={{styles}}>
        <button className='toggle' onClick={darkMode} style={styles}>{set}</button>
        <MainNev styles={styles}/>
        <Introduce styles={styles}/>
        <Footers styles={styles}/>
      </div>
    </>
  );
}

export default App;




// 메인 네비바
// 자기 소개, 네비 버튼, 사진
// footer

// 완료 후 네비 3가지 페이지 기능