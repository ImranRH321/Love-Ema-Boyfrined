import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import AloneCart from "../AloneCart/AloneCart";
import { addDb } from "../../utilites/BanglaDatabaseRoom";

const FatherShop = () => {
  const products = useLoaderData();
  const [boxContainerSaveCart, setBoxContainerSaveCart] = useState([]);

  
  const handlerProductButton = clickingProduct => {
    setBoxContainerSaveCart([...boxContainerSaveCart, clickingProduct])
    // banDataDB 
    addDb(clickingProduct.id)
  } 
  // console.log('boxContainerSaveCart',boxContainerSaveCart);

  return (
    <div className="flex">
      <div className="w-3/4 border-red-500">
        <div className="product_container grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
            <Product product={product} handlerProductButton={handlerProductButton} key={product.id}></Product>
          ))}
        </div>
      </div>
      <div  className="w-auto border-red-500 bg-blue-300 ">
       
        {
            <AloneCart boxContainerSaveCart={boxContainerSaveCart}></AloneCart>
        }
      </div> 
    </div>
  );
};

export default FatherShop;
