import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return [
    <div className="flex justify-center gap-5 font-bold uppercase">
      <Link to="/shop">Shop</Link>
      <Link to="/order">Order</Link>
    </div>,
  ];
};

export default Header;
