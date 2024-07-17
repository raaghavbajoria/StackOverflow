import React from "react";

import "../../App.css";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import HomeMainbar from "../../Components/HomeMainbar/HomeMainbar";
import Chat from '../../Components/Chat'


const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSidebar />
        <div style={{position:"relative", bottom:"20px"}}>
          <Chat />
        </div>
        
      </div>
    </div>
  );
};

export default Home;