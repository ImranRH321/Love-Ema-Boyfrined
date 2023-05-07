import React from "react";

const Product = ({ product }) => {
  const { shipping, quantity, price, name, img, id } = product;
  console.log(product);
  return (
    <div className="border text-start  shadow-md hover:bg-lime-200 hover:text-black duration-500 p-2 border-b-4 relative h-[360px]">
      <figure>
        <img className="w-50" src={img} alt="Shoes" />
      </figure>
      <div className="">
        <h2 className="2xl">
          {name.slice(0,17)}
          <p><span>Price: ${price}</span></p>
        </h2>
        <p>shipping: ${shipping}</p>
        <button className="btn btn-active absolute bottom-0">SeeMore</button>
      </div>
    </div>
  );
};

export default Product;
