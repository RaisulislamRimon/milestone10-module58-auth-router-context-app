import React from "react";
import "./App.css";
import Login from "./components/Login";
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
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
