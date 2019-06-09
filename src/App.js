import React from "react";
import "./App.css";
import { ColorBlock } from "./components";
import images from "./images";

const imageNames = Object.keys(images);

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
        {imageNames.map(imageName => {
          return <ColorBlock key={imageName} imageName={imageName} />;
        })}
      </div>
    </div>
  );
}

export default App;
