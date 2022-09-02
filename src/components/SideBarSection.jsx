import styles from "./css/SideBarSection.module.css";

function SideBarSection(props) {
  return (
    <div className={`${styles.sideBarSection}`}>
      <div className={`${styles.sideBarSectionHeading}`}>{props.heading}</div>
      {props.children}
    </div>
  );
}

export default SideBarSection;
