import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";
import Home from "../../assets/Home.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__home">
        <Link to="/" className="header__home-link">
          <img className="header__home-logo" src={Home} alt="ResourceFinder" />
          <p className="header__home-text"> ResourceFinder </p>
        </Link>
      </div>
      <div className="header__about">
        <Link to="/profile" className="header__about-link">
          <p className="header__about-text"> About </p>
          <img className="header__about-avatar" src={chicken} alt="avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
