import React, { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const Searchweather = () => {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const nav = useNavigate();

  const fetchWeather = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("/weather");
    }, 3000); // Simulate API call
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
        <div className="flex items-center gap-2 w-[60%] h-[25%] mb-4">
          <input
            type="text"
            className="w-[70%] h-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none shadow-md"
            placeholder="Input Location"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 shadow-md transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchweather;
