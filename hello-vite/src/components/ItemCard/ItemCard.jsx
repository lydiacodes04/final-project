import "./ItemCard.css";
// import cardHeartDefault from "../../assets/heart-default.svg";
// import cardHeartLiked from "../../assets/heart-liked.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";

function ItemCard({ resource }) {
  // const currentUser = useContext(CurrentUserContext);

  // const handleCardClick = () => {
  //   onCardClick(item);
  // };

  // const handleLike = () => {
  //   if (currentUser._id === item.owner) {
  //     onCardLike(item._id, isLiked);
  //   } else {
  //     console.log("Not your item");
  //   }
  // };

  // const isLiked = item.likes
  //   ? item.likes.some((id) => id === currentUser._id)
  //   : false;

  // const cardHeartClassName = `card__heart`;

  return (
    <li className="resource">
      <h2 className="resource__name">{resource.Name}</h2>
      <h2 className="resource_address">
        {
          (resource.Address1,
          resource.Address2,
          resource.City,
          resource.StateAbbrev,
          resource.Zip)
        }
      </h2>
      <h2 className="resource_type">{resource.ProgramType}</h2>
      <h2 className="resource_distance">{resource.Distance}</h2>
      {/* <img
        className={cardHeartClassName}
        onClick={handleLike}
        src={isLiked ? cardHeartLiked : cardHeartDefault}
        alt="card like button"
      /> */}
      {/* <img
        className="card__image"
        onClick={handleCardClick}
        src={item.imageUrl}
        alt={item.name}
      /> */}
    </li>
  );
}

export default ItemCard;
