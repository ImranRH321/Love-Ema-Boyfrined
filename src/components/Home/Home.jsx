import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import FatherShop from "../FatherShop/FatherShop";
import Header from '../Header/Header';

const Home = () => {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
