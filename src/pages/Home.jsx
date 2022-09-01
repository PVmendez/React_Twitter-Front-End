import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import CreateTweet from "../components/CreateTweet";
import styles from "./Layout.module.css";
import Tweet from "../components/Tweet";

export const Home = () => {
  return (
    <>
      <div className={`${styles.layout}`}>
        <LeftSidebar />
        <div className="border-start border-end">
          <CreateTweet />
          <Tweet></Tweet>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};
