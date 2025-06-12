import React, { useState } from "react";
import "./Weather.css";

export const Weather = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState(null);

  function search(name) {}

  return (
    <>
      <h1>Weather app</h1>

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.value)}
      />
      <button>Search</button>
      <button>Clean</button>
      <div class="cardResult"></div>
    </>
  );
};
