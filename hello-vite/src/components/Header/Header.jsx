import { Link } from "react-router-dom";
import chicken from "../../images/chicken.jpg";
import Home from "../../images/Home.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__home">
        <Link to="/" className="header__home-link">
          <img
            className="header__home-logo"
            src={Home}
            alt="ResourceFinder home page"
          />
          <p className="header__home-text"> ResourceFinder </p>
        </Link>
      </div>
      <div className="header__about">
        <Link to="/profile" className="header__about-link">
          <p className="header__about-text"> About </p>
          <img
            className="header__about-avatar"
            src={chicken}
            alt="website creator's avatar: photo of Lydia holding a chicken"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
