import "./Profile.css";
import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";

function Profile({}) {
  return (
    <div className="profile">
      <p className="profile__title">
        Meet the Website Developer: Lydia Lockhart
      </p>
      <img
        className="profile__picture"
        src={chicken}
        alt="photo of Lydia, website developer"
      ></img>

      <div className="profile__description">
        This is where I put the description. Something about me. This is my bio.{" "}
      </div>
    </div>
  );
}

export default Profile;
