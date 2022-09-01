import { LeftSidebar } from "../components/LeftSidebar"
import { RightSidebar } from "../components/RightSidebar";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={`${styles.layout}`}>
        <LeftSidebar />
        <RightSidebar />
      </div>
    </>
  )
}