import { Link } from "react-router-dom";
import skyline from "../../assets/skyline.jpg";
import chicken from "../../assets/chicken.jpg";
import NewsExplorer from "../../assets/NewsExplorer.svg";
import "./Header.css";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { useContext } from "react";
function Header() {
  // function Header({ weatherData }) {
  // const { avatar, name } = useContext(CurrentUserContext);

  // const myAvatar = avatar || name;

  return (
    <header className="header">
      {/* <img
        className="header_background"
        src={skyline}
        alt="San Antonio skyline"
      /> */}

      <Link to="/">
        {/* <img
          className="header__logo"
          src={NewsExplorer}
          alt="creator: Lydia Lockhart"
        /> */}
        {/* Photo by <a href="https://unsplash.com/@matthewlejune?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthew LeJune</a> on <a href="https://unsplash.com/photos/aerial-view-of-white-building-IpvDhQjrewM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
         */}
      </Link>

      <p className="header__date-and-location">
        {" "}
        date and location were here
        {/* {currentDate}, {weatherData.city} */}
      </p>
      <div className="header__controls">
        <div className="header__nav">
          {
            <>
              <button> + Button </button>
              <Link to="/profile" className="header__link">
                <p className="header__username">Username Placeholder </p>
                <img className="header__avatar" src={chicken} alt="avatar" />
              </Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
