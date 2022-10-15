import React from "react";
import "./App.css";
import Login from "./components/Login";
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
