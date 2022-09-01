import { LeftSidebar } from "../components/LeftSidebar"
import { RightSidebar } from "../components/RightSidebar";
import CreateTweet from "../components/CreateTweet";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={`${styles.layout}`}>
        <LeftSidebar />
        <CreateTweet />
        <RightSidebar />
      </div>
    </>
  )
}