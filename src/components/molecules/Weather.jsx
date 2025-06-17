import React, { useState } from "react";
import "./Weather.css";

const mockWeatherData = {
  "New York": {
    temperature: "22°C",
    humidity: "56%",
    windSpeed: "15 km/h",
  },
  "Los Angeles": {
    temperature: "27°C",
    humidity: "45%",
    windSpeed: "10 km/h",
  },
  London: {
    temperature: "15°C",
    humidity: "70%",
    windSpeed: "20 km/h",
  },
};

export const Weather = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [found, setFound] = useState(true);

  function search() {
    console.log(searchInput);
    let city = mockWeatherData[searchInput];
    if (city) {
      setWeather({ city: searchInput, ...city });
      setFound(true);
    } else {
      setWeather(null);
      setFound(false);
    }
  }

  function clear() {
    setFound(true);
    setSearchInput("");
    setWeather(null);
  }

  return (
    <>
      <h1>Weather App</h1>

      <div className="barMenu">
        <input
          type="text"
          value={searchInput}
          placeholder="Search for a city"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={search}>Search</button>
        <button onClick={clear}>Clean</button>
      </div>

      {weather && (
        <div className="cardWeaher">
          <img src="./weather.svg" height="50px" width="50px" />

          <p className="cityTitle">{weather.city}</p>
          <p>Temperature:{weather?.temperature}</p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <p>Humidity:{weather?.humidity}</p>
            <p>Wind Speed: {weather?.windSpeed}</p>
          </div>
        </div>
      )}

      {!found && <p>City not found</p>}
    </>
  );
};
