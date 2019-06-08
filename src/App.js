import React from "react";
import "./App.css";
import { ColorBlock } from "./components";

function App() {
  const blocks = new Array(20).fill(1);
  return (
    <div className="App">
      <h1>
        We love plants{" "}
        <span role="img" aria-label="plant">
          🌱
        </span>
      </h1>
      <div className="color-blocks">
        {blocks.map((_, index) => {
          return <ColorBlock key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
