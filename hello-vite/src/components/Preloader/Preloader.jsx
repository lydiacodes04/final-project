import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Preloader() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Preloader</h1>

      <div className="circle-preloader">
        <button>this is a button</button>
        <p>some words go here. this is just a test</p>
      </div>
    </>
  );
}

export default App;
