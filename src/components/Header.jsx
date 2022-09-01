import "./Header.css";

function Header({ text }) {
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
