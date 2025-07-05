import { useState } from "react";
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

  const [loadingStatus, setLoadingStatus] = useState(false);

  const [nothingFoundStatus, setNothingFoundStatus] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleNothingFoundStatus(result) {
    const number = result.length;
    if (number === 0) {
      return setNothingFoundStatus(true);
    }
    return setNothingFoundStatus(false);
  }

  const onZipSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for zip:", inputValue);
    setLoadingStatus(true);
    getYouthPrograms(inputValue)
      .then((data) => {
        const result = data.YouthProgramList.filter(
          (program) => program.Zip === inputValue
        );
        console.log(result);
        setResourceData(result);
        handleNothingFoundStatus(result);
        setLoadingStatus(false);
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
                loadingStatus={loadingStatus}
                nothingFoundStatus={nothingFoundStatus}
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
