import "./topbar.css";
import React from "react";
import { Language, Notifications, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topLeft">
          <span className="logo">MarkAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src={
              window.origin + "/user/:userId"
                ? "../images/wolf.jpg"
                : "./images/wolf.jpg"
            }
            alt="wolf"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
