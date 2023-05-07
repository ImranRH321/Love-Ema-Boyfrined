import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import FatherShop from "../FatherShop/FatherShop";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <FatherShop></FatherShop>
    </div>
  );
};

export default Home;
