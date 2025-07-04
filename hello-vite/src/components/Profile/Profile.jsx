import "./Profile.css";
import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";
import github from "../../assets/github.svg";

function Profile({}) {
  return (
    <div className="profile">
      <p className="profile__title">
        Meet the Website Developer: Lydia Lockhart
      </p>
      <img
        className="profile__picture"
        src={chicken}
        alt="photo of Lydia, website creator, holding a chicken"
      />
      <div className="profile__description">
        This is where I put the description. Something about me. This is my bio.
        <img
          className="profile__description-github"
          src={github}
          alt="github icon"
        />
      </div>
    </div>
  );
}

export default Profile;
