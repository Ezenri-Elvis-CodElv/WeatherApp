import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Searchweather from './pages/Searchweather';
import WeatherF from './pages/WeatherF'; // ✅ Import WeatherF

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Searchweather />
    },
    {
      path: "/weather",
      element: <WeatherF />
    }
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
