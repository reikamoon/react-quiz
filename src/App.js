import React, { useState } from "react";
import "./App.css";
import Game from "./components/game";
import data from "./data.json";

function App() {
// React Hooks
  const [pointer, setPointer] = useState(0);
  const [bgcolor, setBgcolor] = useState("#F00000");

  const textcolor = data[pointer].color;
  

  return (
    <div className="App" style={{ backgroundColor: bgcolor, color: textcolor }}>
      <header
        className="App-header"
        style={{ backgroundColor: bgcolor, color: textcolor }}
      >
        <Game pointer={pointer} setBgcolor={(bgcolor) => setBgcolor(bgcolor)} />
      </header>
    </div>
  );
}

export default App;
