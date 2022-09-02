import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import styles from "./css/Layout.module.css";

function Layout(props) {
  return (
    <div className={`${styles.layout}`}>
      <LeftSidebar />
      <div className={`${styles.layoutBody}`}>{props.children}</div>
      <RightSidebar />
    </div>
  );
}

export default Layout;
