import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import AloneCart from "../AloneCart/AloneCart";
import { addStoreCartDb } from "../../utilites/BanglaDatabaseRoom";

const FatherShop = () => {
  const products = useLoaderData();
  const [boxContainerSaveCart, setBoxContainerSaveCart] = useState([]);

/*   const handlerProductButton = (clickingProduct) => {
    let arrayNewCart = [];
    const existFindOldProductCart = boxContainerSaveCart.find(
      (pd) => pd.id === clickingProduct.id
    );
    if (!existFindOldProductCart) {
      clickingProduct.quantity = 1;
      arrayNewCart = [...boxContainerSaveCart, clickingProduct];
    } else {
      const restingProduct = boxContainerSaveCart.filter(
        (pd) => pd.id !== clickingProduct.id
      );
      existFindOldProductCart.quantity = existFindOldProductCart.quantity + 1;
      arrayNewCart = [...restingProduct, existFindOldProductCart];
    }
    setBoxContainerSaveCart(arrayNewCart);
    addDb(clickingProduct.id);
  }; */

  const handlerAddProductCart = addProduct => {
    addStoreCartDb(addProduct.id)
  } 
  

  // localStorage cart Find data
/*   useEffect(() => {
    let findDataShowCart = [];
    const cartDbProductIdAll = getDataDb();
    for (const id in cartDbProductIdAll) {
      const findProduct = products?.find((prod) => prod.id === id);
      if (findProduct) {
        findProduct.quantity = cartDbProductIdAll[id];
        findDataShowCart.push(findProduct);
      }
      setBoxContainerSaveCart(findDataShowCart);
    }
  }, []); */
  //

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
        {<AloneCart boxContainerSaveCart={boxContainerSaveCart}></AloneCart>}
      </div>
    </div>
  );
};

export default FatherShop;
