import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  if (!data.weather || !Array.isArray(data.weather) || !data.weather[0]) {
    return (
      <p style={{ marginTop: "20px" }}>
        No weather data available. {data.message ? `(${data.message})` : ""}
      </p>
    );
  }

  const iconCode = data.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div
      style={{
        padding: "20px",
        width: "320px",
        margin: "20px auto",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h2>
        {data.name}, {data.sys.country}
      </h2>

      <img src={iconUrl} alt="weather icon" />

      <h1 style={{ fontSize: "48px", margin: "10px 0" }}>
        {Math.round(data.main.temp)}°C
      </h1>

      <p style={{ textTransform: "capitalize", marginBottom: "10px" }}>
        {data.weather[0].description}
      </p>

      <p><strong>Feels like:</strong> {Math.round(data.main.feels_like)}°C</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind:</strong> {data.wind.speed} m/s</p>
      <p><strong>Pressure:</strong> {data.main.pressure} hPa</p>
    </div>
  );
}

export default WeatherCard;

