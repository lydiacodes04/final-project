import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

import { getYouthPrograms } from "../../utils/CareerOneStopApi.js";
function App() {
  const [resource, setResourceData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onZipSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for zip:", inputValue);
    getYouthPrograms(inputValue)
      .then((data) => {
        console.log(data.YouthProgramList.length);
        const result = data.YouthProgramList.filter(
          (program) => program.Zip === inputValue
        );
        setResourceData(result);
        console.log(result);
      })
      .catch((err) => console.error("Error setting data:", err));
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                resource={resource}
                onZipSubmit={onZipSubmit}
                handleInputChange={handleInputChange}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
