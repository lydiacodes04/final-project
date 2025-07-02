import "./ItemCard.css";

function ItemCard({ singleResource }) {
  return (
    <li className="resourceCard">
      <h2 className="resourceCard__name">{singleResource.Name}</h2>
      <h2 className="resourceCard_type">{singleResource.ProgramType}</h2>
      <h2 className="resourceCard__address">
        {singleResource.Address1},{singleResource.City},
        {singleResource.StateAbbrev},{singleResource.Zip}
      </h2>
      <h2 className="resourceCard_distance">{singleResource.Distance}</h2>
    </li>
  );
}

export default ItemCard;
