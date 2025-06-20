import { Link } from "react-router-dom";
import union from "../../assets/Union.svg";
import "./Header.css";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { useContext } from "react";
function Header() {
  // function Header({ weatherData }) {
  // const { avatar, name } = useContext(CurrentUserContext);

  // const myAvatar = avatar || name;

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={union} alt="wtwr logo" />
      </Link>
      <p className="header__date-and-location">
        {/* {currentDate}, {weatherData.city} */}
      </p>
      <div className="header__controls">
        <div className="header__nav">
          {
            <>
              <button> + Add Clothes</button>
              <Link to="/profile" className="header__link">
                <p className="header__username">Username Placeholder </p>
                <img className="header__avatar" src={union} alt="avatar" />
              </Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
