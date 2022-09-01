function SmallIcon(props) {
  return (
    <div className="btn-soft rounded-circle d-inline-flex justify-content-center align-items-center p-2">
      <img src={`${props.icon}.svg`} alt="" />
    </div>
  );
}

export default SmallIcon;
