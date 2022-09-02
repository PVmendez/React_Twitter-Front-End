function Avatar({user}) {
  console.log(user)
  return (
    
    <div className="me-3 flex-shrink-0">
      <img
        src={user.photo}
        alt="profilePhoto"
        className="img-fluid user-image"
      ></img>
    </div>
  );
}

export default Avatar;
