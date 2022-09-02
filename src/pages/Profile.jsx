import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import Tweet from "../components/Tweet";
import stylesLayout from "./Layout.module.css";
import styles from "./Profile.module.css";
import { useParams, Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { TweetsOptions } from "../components/TweetsOptions";

export const Profile = () => {
  const params = useParams();
  const nameAuth = "Chayanne";
  const tweetList = 1;
  const user = [
    {
      id: 1,
      name: "Jorge Bazalto",
      username: "jorgeBazalto",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dignissimos repudiandae ab non neque aliquam distinctio sunt voluptate nostrum! Aliquam a dicta saepe voluptatibus neque, omnis aut aliquid ullam earum.",
      photo: "https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg",
    },
  ];

  return (
    <>
      <div className={`${stylesLayout.layout}`}>
        <LeftSidebar />
        <div className="border-start border-end">
          <main className="border p-0">
            <section className={`container-fluid -0 ${styles.section}`}>
              <div className="border-bottom px-3 py-2 d-flex align-items-center sticky-top bg-white">
                <Link
                  to="/home"
                  className="btn-gray rounded-circle p-2 d-flex justify-content-center align-items-center"
                ></Link>
                <div className="d-flex flex-column justify-content-center ms-3">
                  <h2 className="fs-6 m-0 fw-bold">Elmer Figueroa Arce</h2>
                  <span className="text-muted fs-8">0 Tweets</span>
                </div>
              </div>
              <header className={`${styles.header}`}></header>
              <div
                className={`d-flex justify-content-between align-content-start p-3 position-relative border-bottom ${styles.profileinfo}`}
              >
                <div className="d-flex flex-column justify-content-center">
                  <div className="mb-3">
                  
                    <Avatar photo={user.photo}/>
                  </div>

                  <h2 className="fw-bolder fs-6">Elmer Figueroa Arce</h2>
                  <p className="text-muted m-0 fs-7">@Chayanne</p>
                  <p className="my-1 fs-7">
                    Cantante, compositor, bailarín y actor puertorriqueño. Como solista, ha lanzado
                    22 álbumes de estudio y se estima que ha vendido entre 15 Link 40 millones de
                    discos a nivel mundial lo que lo convierte en uno de los artistas latinos con
                    mayores ventas.
                  </p>
                  <p className="">
                    <span className="text-muted fs-7 me-2">
                      <Link to="/user/Chayanne/following">
                        <span className="text-black fw-bold" id="following-count">
                          25
                        </span>
                        Following
                      </Link>
                    </span>
                    <span className="text-muted fs-7 me-2">
                      <Link to="/user/Chayanne/followers">
                        <span className="text-black fw-bold">1M</span>
                        Followers
                      </Link>
                    </span>
                  </p>
                </div>
                <div>
                  {params.name === nameAuth ? (
                    <Link
                      to=""
                      type="button"
                      className="px-3 py-2 fw-bold fs-7 btn-outline-secondary rounded-pill follow-edit-button"
                      data-bs-toggle="modal"
                      data-bs-target="#EditModal"
                    >
                      <svg viewBox="0 0 24 24" className="d-xl-none"></svg>
                      <span className="mx-2 d-none d-xl-inline">Edit Profile</span>
                    </Link>
                  ) : (
                    <form action="/unfollow" method="POST">
                      <button type="submit" className="btn btn-dark text-white rounded-4">
                        Follow
                      </button>
                    </form>
                  )}
                </div>
              </div>
              <div className="d-flex" id="profile-nav">
                <TweetsOptions option="Tweets" />
                <TweetsOptions option="Tweets & replies" />
                <TweetsOptions option="Media" />
                <TweetsOptions option="Likes" />
              </div>
              <div id="tweets-section">{tweetList > 0 ? <Tweet /> : <div>No hay tweets</div>}</div>
            </section>
          </main>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};
