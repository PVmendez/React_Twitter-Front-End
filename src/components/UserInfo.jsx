import Avatar from "./Avatar";

function UserInfo({ user }) {
  return (
    <div className={`d-flex`}>
      {user && (
        <>
          <Avatar user={user} />
          <div className="flex-fill">
            <div className="d-flex justify-content-between align-items-center">
              <a href="/none" className="fs-7 fw-bold m-0 text-black text-decoration-none">
                <span className="hover-underline">{user.firstName + " " + user.lastName}</span>
                <br />
                <span className="fw-normal text-secondary ms-1">@{user.userName}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
