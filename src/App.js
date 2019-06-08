import React from "react";
import "./App.css";
import { ColorBlock } from "./components";

function App() {
  const blocks = new Array(20).fill(1);
  return (
    <div className="App">
      <h1 className="header">We love plants</h1>
      {blocks.map((_, index) => {
        return <ColorBlock key={index} />;
      })}
    </div>
  );
}

export default App;
