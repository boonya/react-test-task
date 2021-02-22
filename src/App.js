import React from "react";
import "./styles.css";

const ANIMALS = [
  "frog",
  "Scorpion",
  "albatross",
  "penguin",
  "Butterfly",
  "lion",
  "frog"
];

export default function App() {
  return <div className="App">{JSON.stringify(ANIMALS)}</div>;
}
