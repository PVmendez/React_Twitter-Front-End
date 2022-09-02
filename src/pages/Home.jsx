import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { callBackEnd } from "../apiHandler";
import { useEffect, useState } from "react";

export const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getAllTweets = async () => {
      setTweets(await callBackEnd("tweets"));
    };
    getAllTweets();
  }, []);

  return (
    <>
      <Layout>
        <Header title={"Home"}></Header>
        <CreateTweet />
        {tweets.map((tweet, key) => {
          return <Tweet tweet={tweet} key={key} />;
        })}
      </Layout>
    </>
  );
};
