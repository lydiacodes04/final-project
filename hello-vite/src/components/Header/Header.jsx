import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";
import Home from "../../assets/Home.svg";
import "./Header.css";

// import { useContext } from "react";
function Header() {
  return (
    <header className="header">
      <div className="header__controls">
        <Link to="/" className="header__home">
          <img className="header__home-logo" src={Home} alt="ResourceFinder" />
        </Link>

        <Link to="/profile" className="header__about">
          <p className="header__about"> About </p>
          <img className="header__avatar" src={chicken} alt="avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
