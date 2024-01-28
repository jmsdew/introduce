import { useEffect, useRef, useState } from 'react';
import '../css/Project.css';
import Footer2 from './Footer2';
import { SliderContainer } from '../slider/SliderContainer';
import { NavLink } from 'react-router-dom';


const Project = ({styles}) => {
  const url = "https://www.shbell.shop";
  const url2 = "https://github.com/jmsdew/kimbaekjung";



  return (
    <>  
      <div className='projects' style={styles}>
        <div className='aboutMe2'  style={styles}>
          <h3>PROJECT</h3>
        </div>
        <div className='pro-line'></div>


        <NavLink to={"/Project"} className='pro' style={{textDecoration:'underline'}}>학교 종이 땡땡땡</NavLink>
            <br/>
            <NavLink to={"/Project2"} className='pro'>파이널 프로젝트</NavLink>



        <div className='modal1' >
          <div className='slider'><SliderContainer/></div> 

          <div className='date1'>
          <p><strong># java # spring # MySQL # html # css # javascript </strong></p> 
            <h4>개발 인원</h4>
            <p>3명</p>
            <h4>개발 기간</h4>
            <p>2023.12.18 ~ 2024.01.08</p>
          </div>

          <div className='site'>
            <h4>사이트</h4>
            <div className='site1'>
              <button onClick={()=>{window.open(url)}} className='siteBtn' style={styles}>https://www.shbell.shop</button>
            </div>
            <div className='site2'>
            <button onClick={()=>{window.open(url2)}} className='siteBtn' style={styles}>https://github.com/jmsdew/kimbaekjung</button>
            </div>
          </div>
          

          <div className='intro1'>
            <h2>소개</h2>
            <div className='line1'></div>
            <p>초등학교 선생님인 지인의 요청을 만든 초등학교 학생 관리 사이트 입니다.</p>
            <p>학생 착석 체크, 10분 타이머, 칭찬하기 기능,<br/> 지각, 결석 체크, 칭찬에 따른 랭킹 페이지 조회 등이 가능합니다.</p>
            <p><strong>실제 배포되어 지인과 지인의 동료 분들이 사용하고 있습니다.</strong></p>
          </div>

          <div className='skills'>
            <div className='line2'></div>
            <h2>담당한 파트</h2>
              <p> - 접근성 향상을 위해 DNS를 이용한 사이트 이름 지정</p>
              <p> - 웹사이트 보안을 위해 SSL 인증을 통한 HTTPS 사이트 구축(암호화)</p>
              <p> - KAKAO LOGIN API 를 이용한 신뢰있고, 편리한 가입과 로그인 구현</p>
              <p> - 메인화면, 랭킹화면, 캘린더 프론트엔드 구현과 spring boot 서버 구축</p>
              <p> - 메인화면에 필요한 기능들을 각각의 스토리지에 귀속시켜 서버의 부하를 낮춤</p>
              <p>   (로컬 스토리지, 세션 스토리지)</p>
          </div>

         
        </div>
        </div>
        <Footer2/>
    </>
  )
}
export default Project;