import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export const UserCard = ({user}) => {
  return (
    <>
      <Link to="/user/Chayanne">
        <Avatar user={user} />
      </Link>

      <div class="col-10 d-flex flex-column">
        <Link to="/user/Chayanne" class="fs-7  fw-bold text-black d-flex flex-column">
          <span class="hover-underline mb-0 p-0">{user.name}</span>
          <span class="fw-normal text-secondary mt-0 p-0">@{user.username} &middot;</span>
        </Link>
        <p class="fs-7 mt-1">
          {user.desc}
        </p>
      </div>
    </>
  );
};
