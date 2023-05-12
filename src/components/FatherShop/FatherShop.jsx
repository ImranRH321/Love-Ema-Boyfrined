import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import AloneCart from "../AloneCart/AloneCart";
import {
  addStoreCartDb,
  saveCartStoreData,
} from "../../utilites/BanglaDatabaseRoom";

const FatherShop = () => {
  const products = useLoaderData();
  const [originalCart, setOriginalCart] = useState([]);

  useEffect(() => {
    let oneProductAdd = [];
    const fatherStoreDb = saveCartStoreData();
    for (const storeId in fatherStoreDb) {
      const findAddProduct = products?.find((p) => p.id === storeId);
      if (findAddProduct) {
        findAddProduct.quantity = fatherStoreDb[storeId];
        oneProductAdd.push(findAddProduct);
      }
      setOriginalCart(oneProductAdd);
    }
  }, []);

  // add product //
  const handlerAddProductCart = (addProduct) => {
    let duelButSingleCart = [];
    const checkFindProduct = originalCart.find((p) => p.id === addProduct.id);
    if (checkFindProduct) {
      checkFindProduct.quantity = checkFindProduct.quantity + 1;
      const removeProduct = originalCart.filter((p) => p.id !== addProduct.id);
      duelButSingleCart = [...removeProduct, checkFindProduct];
    } else {
      addProduct.quantity = 1;
      duelButSingleCart = [...originalCart, addProduct];
    }
    setOriginalCart(duelButSingleCart);

    // StoreDb//
    addStoreCartDb(addProduct.id);
  };

  return (
    <div className="flex">
      <div className="w-3/4 border-red-500">
        <div className="product_container grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products?.map((product) => (
            <Product
              product={product}
              handlerAddProductCart={handlerAddProductCart}
              key={product.id}
            ></Product>
          ))}
        </div>
      </div>
      <div className="w-auto border-red-500 bg-blue-300 ">
        {<AloneCart originalCart={originalCart}></AloneCart>}
      </div>
    </div>
  );
};

export default FatherShop;
