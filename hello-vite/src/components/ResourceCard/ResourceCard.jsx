import "./ResourceCard.css";

function ResourceCard({ singleResource }) {
  return (
    <li className="resourceCard">
      <h2 className="resourceCard__name">{singleResource.Name}</h2>
      <h3 className="resourceCard__type"> {singleResource.ProgramType}</h3>
      <h4 className="resourceCard__address">
        {singleResource.Address1}, {singleResource.City}, {singleResource.Zip}
      </h4>
    </li>
  );
}

export default ResourceCard;
