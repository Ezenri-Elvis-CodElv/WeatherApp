import React, { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Searchweather = () => {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const nav = useNavigate();

  const getWeather = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `https://weather-update-p3ap.onrender.com/weather?city=${city}`
      );
      setWeather(res.data.data);
      setLoading(false);
      nav("/weather", { state: { weather: res.data.data } });
      console.log(res)
    } catch (err) {
      setError("Failed to fetch weather data");
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-500 text-black"
      }`}
    >
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-sky-300 bg-opacity-50 flex items-center justify-center flex-col gap-3">
          <ClipLoader size={80} color={"#050505"} loading={loading} />
          <h3 className="text-3xl font-bold animate-bounce text-black">
            Loading....
          </h3>
        </div>
      )}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-200"
      >
        {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
      <div
        className={`w-[40%] h-[40%] rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <form onSubmit={getWeather} className="flex items-center gap-2 w-[60%] h-[25%] mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[70%] h-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none shadow-md"
            placeholder="Enter City"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 shadow-md transition-all duration-200"
          >
            Search
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Searchweather;
