import React from "react";
import "./App.css";
import { ColorBlock } from "./components";

function App() {
  return (
    <div className="App">
      {[1, 2, 3].map(number => {
        return <ColorBlock key={number} />;
      })}
    </div>
  );
}

export default App;
