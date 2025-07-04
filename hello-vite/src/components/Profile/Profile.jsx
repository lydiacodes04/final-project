import "./Profile.css";
import { Link } from "react-router-dom";
import chicken from "../../assets/chicken.jpg";

function Profile({}) {
  return (
    <div className="profile">
      <p className="profile__title">
        Meet the Website Developer: Lydia Lockhart
      </p>
      <div className="profile__description">
        <img
          className="profile__picture"
          src={chicken}
          alt="photo of Lydia, website creator, holding a chicken"
        />
        <div className="profile__bio">
          Hi! My name is Lydia Lockhart, and I am a social services professional
          who has learned to code! My love of learning human languages led me to
          be interested in computer languages. As I explored coding, I was
          intrigued by how communicating with computers, I could design
          interactive websites. I decided to apply my software development
          skills to design an app youth could use to find resources near them.
        </div>
      </div>
    </div>
  );
}

export default Profile;
