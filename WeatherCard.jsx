import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md shadow-lg p-6 rounded-2xl w-80 text-center mb-6">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-sm mb-2">{data.weather[0].description.toUpperCase()}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
      <h3 className="text-4xl font-bold">{data.main.temp}°C</h3>
      <div className="flex justify-around mt-4 text-sm">
        <p>💧 {data.main.humidity}%</p>
        <p>🌬 {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
