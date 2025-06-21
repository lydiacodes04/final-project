import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React, { useContext } from "react";

function Main({
  // weatherData,
  onCardClick,
  // clothingItems,
}) {
  // const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  // const temp = weatherData?.temp?.[currentTemperatureUnit] || 999;
  // const { currentUser } = useContext(CurrentUserContext);

  return (
    <main>
      {/* <WeatherCard weatherData={weatherData} /> */}
      <section className="cards">
        <p className="search_bar">Search bar</p>
        <p className="cards__text">
          Search for resources near you. Imagine cards appearing here. there
          would be maybe 6 to start out with and then more if you click "show
          more"{" "}
        </p>
        {/* <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick}
                  onCardLike={onCardLike}
                  isLoggedIn={isLoggedIn}
                  currentUser={currentUser}
                />
              );
            })}
        </ul> */}
      </section>
    </main>
  );
}

export default Main;
