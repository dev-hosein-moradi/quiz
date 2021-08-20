import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        Quiz Bank
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header;
