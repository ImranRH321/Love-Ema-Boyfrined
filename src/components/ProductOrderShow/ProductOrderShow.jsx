import React from "react";
import { useLoaderData } from "react-router-dom";
import AloneCart from "../AloneCart/AloneCart";
import OrderReviewProductSingleItem from "../OrderReviewProductSingleItem/OrderReviewProductSingleItem";

const ProductOrderShow = () => {
  const originalCart = useLoaderData();
  return (
    <div className="grid grid-cols-3 border">
      <div className=" exist_product_container col-span-2 border">
        <div className="">
          {originalCart.map((product) => (
            <OrderReviewProductSingleItem
              product={product}
              key={product.id}
            ></OrderReviewProductSingleItem>
          ))}
        </div>
      </div>
      <div className="cart_container border">
        <AloneCart originalCart={originalCart}></AloneCart>
      </div>
    </div>
  );
};

export default ProductOrderShow;
