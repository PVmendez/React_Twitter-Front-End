import React from "react"
import styles from "./LeftSidebar.module.css";

export const LeftSidebar = () => {
  return (
    <div>
        <img src="twitter" className={`${styles.brand}`} alt="" />
        <div className={`${styles.sidebarmenu}`}>
          <div className={`${styles.sidebarmenuitem} ${styles.sidebarmenuitemactive}`}>
            <img src="home.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            Home
          </div>
          <div className={`${styles.sidebarmenuitem}`}>
            <img src="explore.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            Explore
          </div>

          <div className={`${styles.sidebarmenuitem}`}>
            <img src="notifications.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            Notifications
          </div>

          <div className={`${styles.sidebarmenuitem}`}>
            <img src="messages.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            Messages
          </div>

          <div className={`${styles.sidebarmenuitem}`}>
            <img src="profile.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            Profile
          </div>

          <div className={`${styles.sidebarmenuitem}`}>
            <img src="more.svg" className={`${styles.sidebarmenuitemicon}`} alt=""/>
            More
          </div>
        </div>
      </div>
  )
}