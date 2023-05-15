import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import FatherShop from "./components/FatherShop/FatherShop.jsx";
import ProductOrderShow from "./components/ProductOrderShow/ProductOrderShow.jsx";
import productLoadDataAndCart from "./CustomLoader/CustomLoaderProductCart.js";
import CheckOutPage from "./components/CheckOutPage/CheckOutPage.jsx";
// import { loaderFunction } from "./utilites/BanglaDatabaseRoom.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/shop",
        element: <FatherShop></FatherShop>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/order",
        element: <ProductOrderShow></ProductOrderShow>,
        loader: productLoadDataAndCart,
      },
      {
        path: "/checkout",
        element: <CheckOutPage></CheckOutPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
