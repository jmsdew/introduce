import { NavLink } from "react-router-dom";
import Footer2 from "./Footer2";

const Project2 = () => {


  return (
    <>
    <div className='projects'>
      <div className='aboutMe2'>
        <h3>PROJECT</h3>
      </div>
      <div className='pro-line'></div>

       <NavLink to={"/Project"} className='pro'>학교 종이 땡땡땡</NavLink>
          <br/>
        <NavLink to={"/Project2"} className='pro'  style={{textDecoration:'underline'}}>파이널 프로젝트</NavLink>
    </div>
    <Footer2/>
    </>
  )

}

export default Project2;