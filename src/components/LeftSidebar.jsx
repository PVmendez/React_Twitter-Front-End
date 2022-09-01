import React from "react";
import styles from "./LeftSidebar.module.css";
import TwittButton from "./TwittButton";
import Avatar from "./Avatar";
import SideBarMenuItem from "./SideBarMenuItem";

export const LeftSidebar = () => {
  return (
    <div>
      <div className={`${styles.sidebarmenu}`}>
        <img src="twitter.svg" className={`${styles.brand}`} alt="" />
        <SideBarMenuItem icon={"home"} text={"Home"} />
        <SideBarMenuItem icon={"explore"} text={"Explore"} />
        <SideBarMenuItem icon={"notifications"} text={"Notifications"} />
        <SideBarMenuItem icon={"messages"} text={"Messages"} />
        <SideBarMenuItem icon={"profile"} text={"Profile"} />
        <SideBarMenuItem icon={"more"} text={"More"} />
        <TwittButton />
        <div className={`${styles.userOptions}`}>
          <Avatar />
          <div className="flex-fill">
            <div className="d-flex justify-content-between align-items-center">
              <a href="/none" className="fs-7 fw-bold m-0 text-black text-decoration-none">
                <span className="hover-underline">Ibai Llanos</span>
                <br />
                <span className="fw-normal text-secondary ms-1">@ibai</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
