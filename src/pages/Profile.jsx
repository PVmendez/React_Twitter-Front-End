import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { TweetsOptions } from "../components/TweetsOptions";
import Tweet from "../components/Tweet";
import Avatar from "../components/Avatar";
import stylesLayout from "./Layout.module.css";
import styles from "./Profile.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApi, patchApi } from "../apiHandler";
import { CallBackEnd } from "../apiHandler";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { token } = useSelector((state) => state.token);
  const params = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getOneUser = async () => {
      setUser(await CallBackEnd("users/" + params.userName, token));
      setIsLoading(false);
    };
    getOneUser();
  }, [params.userName, token]);

  if (isLoading) {
    return <>Está cargando</>;
  }

  return (
    <>
      <div className={`${stylesLayout.layout}`}>
        <LeftSidebar />
        <div className="border-start border-end">
          <main className="border p-0">
            <section className={`container-fluid p-0 ${styles.section}`}>
              <div className="border-bottom px-3 py-2 d-flex align-items-center sticky-top bg-white">
                <Link
                  to="/home"
                  className="btn-gray rounded-circle p-2 d-flex justify-content-center align-items-center"
                ></Link>
                <div className="d-flex flex-column justify-content-center ms-3">
                  <h2 className="fs-6 m-0 fw-bold">{user.firstName}</h2>
                  <span className="text-muted fs-8">{user.tweetList.length} Tweets</span>
                </div>
              </div>
              <header
                className={`${styles.header}`}
                style={{ backgroundImage: `url(${user.coverPhoto})` }}
              ></header>
              <div
                className={`d-flex justify-content-between align-content-start p-3 position-relative border-bottom ${styles.profileinfo}`}
              >
                <div className="d-flex flex-column justify-content-center">
                  <div className="mb-3">
                    <Avatar user={user} />
                  </div>

                  <h2 className="fw-bolder fs-6">{user.firstName}</h2>
                  <p className="text-muted m-0 fs-7">@{user.userName}</p>
                  <p className="my-1 fs-7">{user.description}</p>
                  <p className="">
                    <span className="text-muted fs-7 me-2">
                      <Link to="/user/Chayanne/following">
                        <span className="text-black fw-bold" id="following-count">
                          {user.followingList.length + " "}
                        </span>
                        Following
                      </Link>
                    </span>
                    <span className="text-muted fs-7 me-2">
                      <Link to="/user/Chayanne/followers">
                        <span className="text-black fw-bold">{user.followerList.length + " "}</span>
                        Followers
                      </Link>
                    </span>
                  </p>
                </div>
                <div>
                  {user.followerList.includes("631223cb431ae89ba7349c3c") ? (
                    <button
                      type="button"
                      className="btn btn-dark text-white rounded-4"
                      onClick={async () => {
                        console.log(await patchApi(`users/${user.userName}`));
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark text-white rounded-4"
                      onClick={async () => {
                        console.log(await patchApi(`users/${user.userName}`));
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
              <div className="d-flex" id="profile-nav">
                <TweetsOptions option="Tweets" />
                <TweetsOptions option="Tweets & replies" />
                <TweetsOptions option="Media" />
                <TweetsOptions option="Likes" />
              </div>
              {
                <div id="tweets-section">
                  {user.tweetList.length ? (
                    user.tweetList.map((t) => <Tweet key={t._id} tweet={t} />)
                  ) : (
                    <div>No hay tweets{console.log(user)}</div>
                  )}
                </div>
              }
            </section>
          </main>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};
