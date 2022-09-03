import { Link } from "react-router-dom";
import styles from "./css/SideBarMenuItem.module.css";

function SideBarMenuItem({ href, icon, text }) {
  return (
    <Link to={`/${href}`}>
      <div className={`${styles.sidebarmenuitem}`}>
        <img src={`/${icon}.svg`} className={`${styles.sidebarmenuitemicon}`} alt="" />
        {text}
      </div>
    </Link>
  );
}
export default SideBarMenuItem;
