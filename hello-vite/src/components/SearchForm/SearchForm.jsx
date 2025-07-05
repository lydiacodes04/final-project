import "./SearchForm.css";

function SearchForm({ onZipSubmit, handleInputChange, inputValue }) {
  return (
    <form action="" className="search__bar" onSubmit={onZipSubmit}>
      <input
        className="search__fieldset"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="search by zipcode"
      ></input>
      <button className="search__submit-button" type="submit">
        SEARCH
      </button>
    </form>
  );
}

export default SearchForm;
