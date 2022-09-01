import React from "react";
import styles from "./css/LeftSidebar.module.css";
import TwittButton from "./TwittButton";
import SideBarMenuItem from "./SideBarMenuItem";
import UserInfo from "./UserInfo";

export const LeftSidebar = () => {
  return (
    <div>
      <div className={`${styles.sidebarmenu}`}>
        <img src="/twitter.svg" className={`${styles.brand}`} alt="" />
        <SideBarMenuItem icon={"home"} text={"Home"} />
        <SideBarMenuItem icon={"explore"} text={"Explore"} />
        <SideBarMenuItem icon={"notifications"} text={"Notifications"} />
        <SideBarMenuItem icon={"messages"} text={"Messages"} />
        <SideBarMenuItem icon={"profile"} text={"Profile"} />
        <SideBarMenuItem icon={"more"} text={"More"} />
        <TwittButton />
        <UserInfo />
      </div>
    </div>
  );
};
