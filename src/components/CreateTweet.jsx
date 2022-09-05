import "./css/CreateTweet.css";
import Avatar from "./Avatar";
// import TwittButton from "./TwittButton";
import SmallIcon from "./SmallIcon";
import { postApi } from "../apiHandler";
import { CallBackEnd } from "../apiHandler";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CreateTweet() {
  const [tweetContent, setTweetContent] = useState("");
  const { token, User } = useSelector((state) => state);
  const params = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getOneUser = async () => {
      setUser(await CallBackEnd("users/" + User.userName, token));
      setIsLoading(false);
    };
    getOneUser();
  }, [params.userName, token, User]);

  if (isLoading) {
    return <>Está cargando</>;
  }

  return (
    <>
      <div className="tweet-form px-3 pt-2 pb-3 d-flex border-bottom">
        <Avatar user={user}></Avatar>
        <div className="flex-fill overflow-auto">
          <div className="tweet-content overflow-auto">
            <div id="new-tweet-content">
              <textarea
                onChange={(e) => setTweetContent(e.target.value)}
                className="w-100"
                name="tweetContent"
                id="tweetContent"
                rows="3"
                spellCheck="false"
                placeholder="What's happening?"
                maxLength="140"
                resize="none"
                value={tweetContent}
                required
              />
            </div>
          </div>
          <hr className="mt-2 mb-0" />
          <div className="form-footer pt-3 d-flex justify-content-between align-items-end">
            <div>
              <SmallIcon icon="picture" />
              <SmallIcon icon="gif" />
              <SmallIcon icon="stadistics" />
              <SmallIcon icon="smiley" />
              <SmallIcon icon="calendar" />
            </div>
            <div>
              <button
                type="reset"
                onClick={async () => {
                  await postApi("tweets", { content: tweetContent });
                  window.location.reload();
                }}
                className="py-2 px-3 twitt-button rounded-pill fw-bold fs-7 border-0"
                id="tweet-post"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTweet;
