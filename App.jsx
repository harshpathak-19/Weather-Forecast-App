import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import WeatherChart from "./components/WeatherChart";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; 

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert("City not found! Please enter a valid city name.");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">🌤️ Weather Forecast App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-l-lg border border-gray-400 focus:outline-none"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
        >
          Search
        </button>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 bg-gray-700 text-white px-3 py-1 rounded-lg"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {weatherData && (
        <>
          <WeatherCard data={weatherData} />
          <WeatherChart temp={weatherData.main.temp} />
        </>
      )}
    </div>
  );
};

export default App;
