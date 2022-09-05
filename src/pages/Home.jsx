import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { CallBackEnd } from "../apiHandler";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const { token } = useSelector((state) => state);
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getAllTweets = async () => {
      setTweets(await CallBackEnd("tweets", token));
      setIsLoading(false);
    };
    getAllTweets();
  }, [token]);

  if (isLoading) {
    return <>Está cargando</>
  }

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
