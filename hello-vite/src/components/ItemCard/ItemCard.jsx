import "./ItemCard.css";

function ItemCard({ singleResource }) {
  return (
    <li className="resourceCard">
      <h2 className="resourceCard__name">{singleResource.Name}</h2>
      <h3 className="resourceCard__type"> {singleResource.ProgramType}</h3>
      <h4 className="resourceCard__address">
        {singleResource.Address1},{singleResource.City},{singleResource.Zip}
      </h4>
      <h5 className="resourceCard__distance">{singleResource.Distance}</h5>
    </li>
  );
}

export default ItemCard;

// removed, as it wasn't showing:
// {singleResource.StateAbbrev}
// {singleResource.Address2}
