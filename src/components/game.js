/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import data from "../data.json";
import "./game.css";

function Game({ id, setBgcolor }) {
  const [pointer, setPointer] = useState(0);
  //Props
  const { question, answers } = data[pointer];

  //Colors
  const bg = data[pointer].bg;
  const textcolor = data[pointer].color;
  //Set the background color to whatever color is on the current json entry.
  setBgcolor(bg);

  return (
    <div style={{ backgroundColor: bg, color: textcolor }}>
      <div className="bordercontainer">
        <div
          className="pointernumber"
          style={{ backgroundColor: bg, color: textcolor }}
        >
          <h1>{pointer}</h1>
        </div>

        <h1>React Quiz!</h1>

        <div className="title">
          <h1>{question}</h1>
        </div>

        {data[pointer].answers[0] ? (
          <button
            className="button1"
            style={{ backgroundColor: bg, color: textcolor }}
            onClick={() => setPointer(data[pointer].answers[0].next)}
          >
            {data[pointer].answers[0].text}
          </button>
        ) : null}

        {data[pointer].answers[1] ? (
          <button
            className="button2"
            style={{ backgroundColor: bg, color: textcolor }}
            onClick={() => setPointer(data[pointer].answers[1].next)}
          >
            {data[pointer].answers[1].text}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Game;
