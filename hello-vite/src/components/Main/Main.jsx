import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import SearchForm from "../SearchForm/SearchForm";

function Main({ resource, onZipSubmit, handleInputChange, inputValue }) {
  return (
    <main>
      <section className="search">
        <form action="" className="search__bar" onSubmit={onZipSubmit}>
          <input
            className="search__fieldset"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="search for resources"
          ></input>
          <button className="search__submit-button" type="submit">
            SEARCH
          </button>
        </form>

        <p className="search__text">
          Search for resources near you. The cards below show resources in the
          zipcode you searched. There will be a maximum of 6 to start out with
          and then more if you click "show more." For example, try zipcodes
          99504 (Anchorage, AK), 78207 (San Antonio, TX), or 95403 (Santa Rosa,
          California).
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
