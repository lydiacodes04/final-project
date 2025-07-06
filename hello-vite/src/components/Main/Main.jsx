import "./Main.css";
import ResourceCard from "../ResourceCard/ResourceCard";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Main({
  resource,
  onZipSubmit,
  handleInputChange,
  inputValue,
  loadingStatus,
  nothingFoundStatus,
}) {
  return (
    <main>
      <section className="search">
        <p className="search__text">
          Search for resources near you. The cards below show resources in the
          zipcode you searched. There will be a maximum of 6 to start out with
          and then more if you click "show more." For example, try zipcodes
          99504 (Anchorage, AK), 78205 (San Antonio, TX), or 95403 (Santa Rosa,
          California).
        </p>
      </section>
      <SearchForm
        onZipSubmit={onZipSubmit}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <Preloader loading={loadingStatus} nothingFound={nothingFoundStatus} />
      <div className="search_results">
        {resource.map((singleResource) => {
          return (
            <ResourceCard
              singleResource={singleResource}
              key={singleResource.Name}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
