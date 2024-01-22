import { useEffect, useRef, useState } from 'react';
import './css/Project.css';


const Project = ({styles}) => {
  const url = "https://www.shbell.shop";
  const url2 = "https://github.com/jmsdew/kimbaekjung";

    const [isOn, setIsOn] = useState(false);

    const refs = useRef();

    useEffect(()=>{
      if(isOn===true){
        refs.current.style.display='block';
      }else{
        refs.current.style.display='none';
      }
      const handler = (e)=>{
        if(refs.current && !refs.current.contains(e.target)){
          setIsOn(false);
        }
      }

      document.addEventListener('mousedown', handler);

    })

    const modalOpen = () => {
      setIsOn(!isOn);
    }


  return (
    <>  
      <div className='projects' style={styles}>
        <div className='aboutMe2'  style={styles}>
          <h3>PROJECT</h3>
          <div className='pro-line'></div>
        </div>

        <div className="firstPro"  style={styles}>
          <div className="box1" ><button className='proBtn' style={styles} onClick={modalOpen}>
            <img className='image1' src={require("./image/cha.png")}/></button></div>
          <div className="ment1" >
            <h4>학교 종이 땡땡땡</h4>
            <p>초등학교 선생님 들을 위한 학생 관리 사이트</p>
            <p> #java #spring #SSL #DNS #MySQL </p>
          </div>
        </div>

        <div className="thirdPro" style={styles}>
          <div className="box1"></div>
          <div className="ment1">
            <h4>파이널 프로젝트</h4>
            <p>파이널 프로젝트를 위한 자리입니다.</p>
            <p> #final </p>
          </div>
        </div>

        <div className='modal1' ref={refs} style={styles}>
          <h1>학교 종이 땡땡땡</h1>
          <img className='semi1' src={require("./image/semi.png")}/>

          <div className='date1'>
          <p># java # spring # MySQL # html # css # javascript </p> 
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
            <p>학생 착석 체크, 10분 타이머, 칭찬하기 기능, 지각, 결석 체크, 칭찬에 따른 랭킹 페이지 조회 등이 가능합니다.</p>
            <p>실제 배포되어 지인과 지인의 동료 분들이 사용하고 있습니다.</p>
          </div>

          <div className='skills'>
            <div className='line2'></div>
            <h2>담당한 파트</h2>
              <p> - DNS를 이용한 사이트 이름 지정</p>
              <p> - 웹사이트 보안을 위해 SSL 인증을 통한 HTTPS 사이트 구축</p>
              <p> - KAKAO LOGIN API 를 이용한 편리한 가입과 로그인 구현</p>
              <p> - 메인화면, 랭킹화면, 캘린더 프론트엔드 구현과 spring boot 서버 구축</p>
              <p> - 메인화면에 필요한 기능들을 각각의 스토리지에 귀속시켜 서버의 부하를 낮춤</p>
          </div>

         
        </div>
        </div>
    </>
  )
}
export default Project;