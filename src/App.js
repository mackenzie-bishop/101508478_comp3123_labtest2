import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  const API_KEY = "dcf785f81ebafc8be9ec5f1a460420d7";

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log("API response:", data);
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        minHeight: "100vh",
        paddingTop: "40px",
        background: "linear-gradient(to bottom, #89cff0, #ffffff)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard data={weather} />
    </div>
  );
}

export default App;


