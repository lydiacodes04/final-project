import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";
import NewsExplorer from "../../assets/NewsExplorer.svg";
import "./Header.css";

// import { useContext } from "react";
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={NewsExplorer} alt="ResourceFinder" />
      </Link>

      <div className="header__controls">
        <div className="header__nav">
          {
            <Link to="/profile" className="header__link">
              <p className="header__username"> About </p>
              <img className="header__avatar" src={chicken} alt="avatar" />
            </Link>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
