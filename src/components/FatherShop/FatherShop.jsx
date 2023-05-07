import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const FatherShop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl">কিসমত - হোসেনপুর রোড </h1>
      <h1 className="text-3xl">Shadat store </h1>
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipPNtRAaGX9wJ6dYVlLAMZWOw8Q-_q9bOBOFz8U8=s1360-w1360-h1020"
        alt=""
      />
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
       {products?.map(product => <Product product={product} key={product.id}></Product>)}
      </div>
    </div>
  );
};

export default FatherShop;
