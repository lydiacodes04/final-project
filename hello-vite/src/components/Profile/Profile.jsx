import "./Profile.css";
import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";

function Profile({}) {
  return (
    <div className="profile">
      <section className="profile__title"></section>
      <section className="profile__picture" src={chicken}></section>
      <section className="profile__description"></section>
    </div>
  );
}

export default Profile;
