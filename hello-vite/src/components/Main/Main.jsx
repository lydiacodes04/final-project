import "./Main.css";
// import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
// import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext, useState } from "react";
import github from "../../assets/github.svg";
// import SearchField from "../../assets/SearchField.svg";

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
      <ItemCard resource={resource}></ItemCard>
      {/* <section className="cards"> */}
      {/* <ul className="cards__list">
          {resourceItems
            .map((item) => {
              return (
                <ItemCard
                resource = {resource}
                  onCardClick={onCardClick}
                  onCardSave={onCardSave}
                  currentUser={currentUser}
                />
              );
            })}
        </ul> */}
      {/* </section> */}
    </main>
  );
}

export default Main;
