import React from "react"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  
  
  return (
    <div className="flex">
        <Sidebar/>
        {/* Body will have sidebar and outlet which is either of MainContainer or 
             WatchPage which will be decided using children of Body
             declared in App.js
        <MainContainer/>
        <WatchPage/> 
        */}
        <Outlet/>
    </div>
  )
}
export default Body