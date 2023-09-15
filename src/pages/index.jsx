import { useState } from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../style/index.css';
import DashboardCard from "../components/DashboardCard";
import MyCarousal from "../components/MyCarousal";
const Index = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="main" style={{overflowY:(isDrawerOpen==true?'hidden':'auto'),minHeight:'100vh'}}>
        <Header/>
        <div className="page" style={{minHeight:'520px',marginTop:"40px"}}>
          <Appbar  isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          <DashboardCard/>
          <MyCarousal />
         </div>
        <Footer />
    </div>
  )
}

export default Index