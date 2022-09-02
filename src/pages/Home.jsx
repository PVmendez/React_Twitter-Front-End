import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { getApi } from "../apiHandler";
import { useEffect, useState } from "react";

export const Home = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getAllTweets = async () => {
      setTweets(await getApi("tweets"));
    };
    getAllTweets();
  }, []);

  return (
    <>
      <Layout>
        <Header title={"Home"}></Header>
        <CreateTweet />
        {tweets.map((tweet, key) => (
          <Tweet tweet={tweet} key={key} />
        ))}
      </Layout>
    </>
  );
};
