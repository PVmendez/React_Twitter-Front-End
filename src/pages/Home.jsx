import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import CreateTweet from "../components/CreateTweet";
import styles from "./Home.module.css";
import Tweet from "../components/Tweet";
import Header from "../components/Header";

export const Home = () => {
  return (
    <>
      <div className={`${styles.layout}`}>
        <LeftSidebar />
        <div className="border-start border-end">
          <Header text={"Home"}></Header>
          <CreateTweet />
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};
