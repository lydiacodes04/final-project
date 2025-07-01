import "./ItemCard.css";

function ItemCard({ singleResource }) {
  return (
    <li className="resourceCard">
      <h2 className="resourceCard__name">{singleResource.Name}</h2>
      <h2 className="resourceCard__address">
        {singleResource.Address1},{singleResource.City},
        {singleResource.StateAbbrev},{singleResource.Zip}
      </h2>
      {/* <h2 className="resource_address">
        {`${resource.Address1}, ${resource.City}, ${resource.StateAbbrev}, ${resource.Zip}`}
      </h2> */}
      {/* Address 2 */},
      <h2 className="resourceCard_type">{singleResource.ProgramType}</h2>
      <h2 className="resourceCard_distance">{singleResource.Distance}</h2>
    </li>
  );
}

export default ItemCard;
