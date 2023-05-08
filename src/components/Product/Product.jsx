import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product,handlerProductButton }) => {
  const { shipping, quantity, price, name, img, id } = product;

  return (
    <div className="border text-start  shadow-md hover:bg-success hover:text-black duration-500 p-2 border-b-4 relative h-[360px]">
      <figure>
        <img className="w-50" src={img} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="2xl">
          {name.slice(0, 17)}
          <p>
            <span>Price: ${price}</span>
          </p>
        </h2>
        <p>shipping: ${shipping}</p>
        <Link to="">
          <button onClick={()=>handlerProductButton(product)} className="btn btn-sm bg-lime-300 hover:btn-primary text-black  absolute bottom-0 capitalize">
            addMore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
