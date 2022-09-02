import { UserCard } from "../components/UserCard";
import { Link } from "react-router-dom";

export const Followers = () => {
  const followers = [
    {
      id: 1,
      name: "Jorge Bazalto",
      username: "jorgeBazalto",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dignissimos repudiandae ab non neque aliquam distinctio sunt voluptate nostrum! Aliquam a dicta saepe voluptatibus neque, omnis aut aliquid ullam earum.",
      photo: "https://pbs.twimg.com/profile_images/1540810647604183046/OhYhwdAi_400x400.jpg",
    },
  ];
  return (
    <main className="border p-0">
      <section className="container-fluid p-0 vh-100">
        <div className=" px-3 py-2 d-flex align-items-center sticky-top bg-white">
          <Link
            to="/home"
            className="btn-gray rounded-circle p-2 d-flex justify-content-center align-items-center"
          >
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
              </g>
            </svg>
          </Link>
          <div className="col-6 d-flex flex-column justify-content-center ms-3">
            <h2 className="fs-6 m-0 fw-bold">Followers</h2>
          </div>

          <div className="col-6 d-flex flex-column justify-content-center ms-3">
            <h2 className="fs-6 m-0">
              <Link to="/user/Chayanne/following">Following</Link>
            </h2>
          </div>
        </div>
        <div className=" row p-3  border-top ">
          {followers.map((f) => {
            <UserCard user={f} />;
          })}
        </div>
      </section>
    </main>
  );
};
