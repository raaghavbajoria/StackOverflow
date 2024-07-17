import React from "react";
//import { useLocation } from "react-router-dom";

import "./Users/Users.css";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";
import SocialMediaPage from "../Components/SocialMediaPage";
import RightSidebar from "../Components/RightSidebar/RightSidebar";

const Users = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <div><SocialMediaPage /> </div>
      </div>
    </div>
  );
};

export default Users;