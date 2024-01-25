import React, { useEffect } from 'react';
import '../css/About.css';
import Footer2 from './Footer2';



const About = ({styles}) => {

  return(
    <>
    <div className='intro' style={styles}>
      <div className='aboutMe'>
        <h3>ABOUT ME</h3>
        <div className='line'></div>
        <p>안녕하세요 <strong>우직하게</strong> 공부하는 개발자 정민식 입니다.</p>
        <p>2023년 10월부터 개발 공부를 시작하여</p>
        <p><strong>성실하고 끈기있게</strong> 성장하는 백엔드 개발자를 목표로 노력 중입니다.</p>
      
      </div>
      <div className='skill'>
        <h3>SKILL</h3>
        <div className='line'></div>
        <p>java | spring | DBMS | JPA</p>
        <p>React | SpringSecurity</p>

      </div>

      <img className='green' src="https://ghchart.rshah.org/0a5c0a/jmsdew"/>
      <img className='baekjoon' src="http://mazassumnida.wtf/api/v2/generate_badge?boj=jmsdew" alt="Solved.ac프로필"/>
      <img className='languages' src='https://github-readme-stats.vercel.app/api/top-langs/?username=jmsdew&layout=compact&theme=white'/>
      
   </div>
   <Footer2/>
    </>
  )
  
}


export default About;