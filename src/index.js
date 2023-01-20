import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from ".//pages/Home"
import Card from ".//pages/Card"
import CategoryPage from ".//pages/CategoryPage"
import Login from ".//pages/Login"
import ProductPage from ".//pages/ProductPage"
import Register from ".//pages/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/card",
    element:<Card/>,
  },
  {
    path: "/categoryPage",
    element:<CategoryPage/>,
  },
  {
    path: "/login",
    element:<Login/>,
  },
  {
    path: "/productPage",
    element:<ProductPage/>,
  },
  {
    path: "/register",
    element:<Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

