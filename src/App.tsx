import React from "react";
import "./App.css";
import { ColorBlock } from "./components";
import { plants } from "./data/plants";

function App() {
  return (
    <div className="App">
      <h1>
        We love plants{" "}
        <span role="img" aria-label="plant">
          🌱
        </span>
      </h1>
      <div className="color-blocks">
        {plants.map((plant, index) => {
          return <ColorBlock key={index} plant={plant} />;
        })}
      </div>
    </div>
  );
}

export default App;
