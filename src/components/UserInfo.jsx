import Avatar from "./Avatar";
import { Link } from "react-router-dom";
function UserInfo({ user }) {
  return (
    <div className={`d-flex`}>
      {user && (
        <>
          <Link to={`/${user.userName}`}>
            <Avatar user={user} />
          </Link>
          <div className="flex-fill">
            <div className="justify-content-between align-items-center">
              <Link
                to={`/${user.userName}`}
                className="fs-7 fw-bold m-0 text-black text-decoration-none"
              >
                <span className="hover-underline">{user.firstName + " " + user.lastName}</span>
              </Link>

              <br />
              <Link to={`/${user.userName}`}>
                <span className="small text-secondary ms-1">@{user.userName}</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
