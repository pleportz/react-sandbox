import React from "react";
import "./App.css";
import { ColorBlock } from "./components";

function App() {
  const blocks = new Array(30).fill(1);
  return (
    <div className="App">
      {blocks.map((_, index) => {
        return <ColorBlock key={index} />;
      })}
    </div>
  );
}

export default App;
