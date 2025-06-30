import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  // Navigate,
  // useNavigate,
  // useLocation,
} from "react-router-dom";

import "./App.css";
// import { coordinates } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
// import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
// import Profile from "../Profile/Profile";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import ProtectedRoute from "../ProtectedRoute";
import { getYouthPrograms } from "../../utils/api.js";

function App() {
  const [zipcode, setZipcode] = useState({});
  const [resource, setResourceData] = useState([]);
  // const [activeModal, setActiveModal] = useState("");
  // const [selectedCard, setSelectedCard] = useState({});
  // const [clothingItems, setClothingItems] = useState([]);
  // const [programData, setProgramData] = useState([]);
  // const zipcode = "78218";

  // const navigate = useNavigate();
  // const location = useLocation();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onZipSubmit = (e) => {
    e.preventDefault();
    const zipcode = inputValue;
    setZipcode(zipcode);
    getYouthPrograms(zipcode)
      .then((data) => {
        console.log(data);
        const resource = data;
        setResourceData(resource);

        return data;
      })
      .catch((err) => console.error("Error setting data:", err));
  };

  // useEffect((zipcode) => {
  //   setZipcode(zipcode)
  //     .then((data) => {
  //       setResourceData(data);
  //     })
  //     .catch((err) => console.error("Error getting items:", err));
  // }, []);

  // useEffect(() => {
  //   getLocation(coordinates)
  //     .then((data) => {
  //       const filteredData = filterProgramData(data);
  //       setProgramData(filteredData);
  //     })
  //     .catch((err) => console.error("Error getting location data:", err));
  // }, []);

  // const submitZipcode = (zipcode) => {
  //   updateZipcode(zipcode)
  //     .then((data) => {
  //       setCurrentZipcode(data);
  //     })
  //     .catch((err) => console.error("Error setting data:", err));
  // };

  // const handleCardClick = (card) => {
  //   setActiveModal("preview");
  //   setSelectedCard(card);
  // };

  // const closeActiveModal = () => {
  //   setActiveModal("");
  // };

  // const submitEditProfile = ({ name, avatar }) => {
  //   updateProfile(name, avatar)
  //     .then((data) => {
  //       setCurrentUser(data);
  //       closeActiveModal();
  //       navigate("/profile");
  //     })
  //     .catch((err) => console.error("Error setting data:", err));
  // };

  // const handleLogin = ({ email, password }) => {
  //   if (!email || !password) {
  //     return;
  //   }
  //   signIn(email, password)
  //     .then((data) => {
  //       if (data.token) {
  //         localStorage.setItem("jwt", data.token);
  //         return verifyUser(data.token);
  //       }
  //       return navigate("/");
  //     })
  //     .then((data) => {
  //       setCurrentUser(data);
  //       setIsLoggedIn(true);
  //       closeActiveModal();
  //       navigate("/profile");
  //     })
  //     .catch((err) => console.log("A login error has occurred", err));
  // };

  // useEffect(() => {
  //   getLocation(coordinates)
  //     .then((data) => {
  //       const filteredData = filterProgramData(data);
  //       setProgramData(filteredData);
  //     })
  //     .catch((err) => console.error("Error getting location data:", err));
  // }, []);

  // useEffect(() => {
  //   getItems()
  //     .then((data) => {
  //       setClothingItems(data);
  //     })
  //     .catch((err) => console.error("Error getting items:", err));
  // }, []);

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      {/* <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        > */}
      <div className="page__content">
        <Header
        // weatherData={weatherData}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                resource={resource}
                onZipSubmit={onZipSubmit}
                handleInputChange={handleInputChange}
                // onCardClick={handleCardClick}
                // clothingItems={clothingItems}
              />
            }
          />
          {/* <Route
            path="/profile"
            element={
              <Profile
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
              />
            }
          /> */}
        </Routes>

        <Footer />
      </div>
      {/* <RegisterModal
          isOpen={activeModal === "registration-modal"}
          onClose={closeActiveModal}
          onSubmit={handleRegistration}
          handleShowLogin={handleShowLogin}
        /> */}
      {/* <LoginModal
          isOpen={activeModal === "login-modal"}
          onClose={closeActiveModal}
          onSubmit={handleLogin}
          handleAddRegistration={handleAddRegistration}
        /> */}
      {/* <AddItemModal
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={handleAddItemSubmit}
        /> */}
      {/* <ItemModal
        activeModal={activeModal}
        onClose={closeActiveModal}
        card={selectedCard}
      /> */}
      {/* <EditProfileModal
          activeModal={activeModal}
          isOpen={activeModal === "edit-profile"}
          onClose={closeActiveModal}
          onSubmit={submitEditProfile}
        ></EditProfileModal> */}
      {/* </CurrentTemperatureUnitContext.Provider> */}
    </div>
    // </CurrentUserContext.Provider>
  );
}

export default App;
