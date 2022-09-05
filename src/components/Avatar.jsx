function Avatar({ user }) {
  return (
    <div className="me-3 flex-shrink-0">
      {user && (
        <img src={user.profilePhoto} alt="profilePhoto" className="img-fluid user-image"></img>
      )}
    </div>
  );
}

export default Avatar;
