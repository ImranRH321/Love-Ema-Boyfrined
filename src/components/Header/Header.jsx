import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navItem = [{
    name: "Shop",
    rasta: "/shop",
  }];
  return (
    <div>
      {/* <h1>navbar</h1>  */}
      {navItem.map((itemLink) => (
        <div>
          <Link to={itemLink.rasta}>{itemLink.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Header;
