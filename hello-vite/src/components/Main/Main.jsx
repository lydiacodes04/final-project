import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";

function Main({ resource, onZipSubmit, handleInputChange, inputValue }) {
  return (
    <main>
      <section className="search">
        <form action="" className="search_bar" onSubmit={onZipSubmit}>
          <input
            className="search_fieldset"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="search for resources"
          ></input>
          <button className="search_submit-button" type="submit">
            SEARCH
          </button>
        </form>

        <p className="search__text">
          Search for resources near you. The cards below show resources in the
          zipcode you searched. There will be a maximum of 6 to start out with
          and then more if you click "show more."
          {/* Search for resources near you. Imagine cards appearing here. there
          would be maybe 6 to start out with and then more if you click "show
          more" */}
        </p>
      </section>

      {resource.map((singleResource) => {
        return (
          <ItemCard singleResource={singleResource} key={singleResource.Name} />
        );
      })}
      <button className="search__more-button">Show more</button>
    </main>
  );
}

export default Main;
