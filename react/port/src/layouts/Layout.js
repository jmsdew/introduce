import { Outlet } from "react-router-dom"
import MainNev from "../components/MainNev"
import Footers from "../components/Footers"


const Layout = () => {

  
  return (
    <>
      <MainNev/>
      <Outlet/>
      <Footers/>
    </>
  )
}
export default Layout;