import "./SearchForm.css";

function SearchForm({ onZipSubmit, handleInputChange, inputValue }) {
  return (
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
    </section>
  );
}

export default SearchForm;
