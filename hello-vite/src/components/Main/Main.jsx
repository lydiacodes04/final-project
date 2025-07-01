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
          <button className="search_button" type="submit">
            SEARCH
          </button>
        </form>

        <p className="search__text">
          Search for resources near you. Imagine cards appearing here. there
          would be maybe 6 to start out with and then more if you click "show
          more"
          <button>Show more</button>
        </p>
      </section>
      {/* <ItemCard singleResource={singleResource}></ItemCard> */}
      {resource.map((singleResource) => {
        return (
          <ItemCard singleResource={singleResource} key={singleResource.Name} />
        );
      })}
    </main>
  );
}

export default Main;
