import React from "react";
import styles from "./css/LeftSidebar.module.css";
import TwittButton from "./TwittButton";
import SideBarMenuItem from "./SideBarMenuItem";
// import UserInfo from "./UserInfo";

export const LeftSidebar = () => {
  return (
    <div>
      <div className={`${styles.sidebarmenu}`}>
        <img src="/twitter.svg" className={`${styles.brand}`} alt="" />
        <SideBarMenuItem href="home" icon={"home"} text={"Home"} />
        <SideBarMenuItem href="expl" icon={"explore"} text={"Explore"} />
        <SideBarMenuItem href="noti" icon={"notifications"} text={"Notifications"} />
        <SideBarMenuItem href="mess" icon={"messages"} text={"Messages"} />
        <SideBarMenuItem href="prof" icon={"profile"} text={"Profile"} />
        <SideBarMenuItem href="more" icon={"more"} text={"More"} />
        <TwittButton />
        {/* <UserInfo /> */}
      </div>
    </div>
  );
};
