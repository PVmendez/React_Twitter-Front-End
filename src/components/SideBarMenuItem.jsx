import styles from "./SideBarMenuItem.module.css";

function SideBarMenuItem({ icon, text }) {
  return (
    <div className={`${styles.sidebarmenuitem}`}>
      <img src={`${icon}.svg`} className={`${styles.sidebarmenuitemicon}`} alt="" />
      {text}
    </div>
  );
}
export default SideBarMenuItem;
