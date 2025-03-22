import React, { useState, useEffect } from "react";
import { FaCloudSunRain } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const WeatherF = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const weather = location.state?.weather;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-sky-700 text-gray-900"
      } flex items-center justify-center h-screen`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex items-center gap-2"
      >
        {darkMode ? <MdOutlineLightMode size={24} /> : <MdDarkMode size={24} />}
      </button>

      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
      >
        <RiArrowGoBackFill />
      </button>

      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-sky-300 text-black"
        } w-[40%] h-[40%] flex flex-col items-center justify-center rounded-xl p-6 shadow-md`}
      >
        {loading ? (
          <div className="flex flex-col items-center">
            <ClipLoader color={darkMode ? "#ffffff" : "#000000"} size={50} />
            <p className="mt-3 text-lg">Fetching weather data...</p>
          </div>
        ) : weather ? (
          <>
            <h2 className="text-3xl font-bold">{weather.city}</h2>
            <p className="text-2xl mt-2 flex flex-row gap-2 items-center">
              <FaCloudSunRain /> {weather.condition}
            </p>
            <p className="text-xl mt-2">Temperature: {weather.temperature}°C</p>
            <p className="text-xl mt-2">Wind Speed: {weather.wind_Speed} km/h</p>
            <p className="text-xl mt-2">Humidity: {weather.humidity}%</p>
          </>
        ) : (
          <p className="text-lg">No weather data available.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherF;
