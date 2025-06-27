import "./ItemCard.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";

function ItemCard({ resource }) {
  // const currentUser = useContext(CurrentUserContext);

  // const handleCardClick = () => {
  //   onCardClick(item);
  // };

  return (
    <li className="resource">
      <h2 className="resource__name">{resource.Name}</h2>
      <h2 className="resource_address">
        {`${resource.Address1}, ${resource.City}, ${resource.StateAbbrev}, ${resource.Zip}`}
      </h2>
      {/* Address 2 */},
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
