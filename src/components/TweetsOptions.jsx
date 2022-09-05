import { Link } from "react-router-dom";

export const TweetsOptions = ({ option }) => {
  return (
    <>
      <Link to="" className="flex-grow-1 btn-gray btn rounded-0 fs-7 fw-600 py-3 text-secondary">
        <svg viewBox="0 0 24 24" className="d-xl-none"></svg>
        <span className="mx-2 d-none d-xl-inline text-black">{option}</span>
      </Link>
    </>
  );
};
