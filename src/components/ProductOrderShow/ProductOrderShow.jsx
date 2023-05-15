import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AloneCart from "../AloneCart/AloneCart";
import OrderReviewProductSingleItem from "../OrderReviewProductSingleItem/OrderReviewProductSingleItem";
import { deletedOrderProduct } from "../../utilites/BanglaDatabaseRoom";

const ProductOrderShow = () => {
  const cartProduct = useLoaderData();
  const [originalCart, setOriginalCart] = useState(cartProduct);

  const handleDeletedProduct = (id) => {
    const deletedProduct = originalCart.filter((product) => product.id !== id);
    alert("Are sure Deleted");
    setOriginalCart(deletedProduct);
    deletedOrderProduct(id);
  };

  return (
    <div className="grid grid-cols-3 border">
      <div className=" exist_product_container col-span-2 border">
        <div className="">
          {originalCart.map((product) => (
            <OrderReviewProductSingleItem
              product={product}
              handleDeletedProduct={handleDeletedProduct}
              key={product.id}
            ></OrderReviewProductSingleItem>
          ))}
        </div>
      </div>
      <div className="cart_container border">
        <AloneCart
          originalCart={originalCart}
          setOriginalCart={setOriginalCart}
        >
          <Link to="/checkout">
            <button className="btn btn-success  btn-sm">
              Proceed Checkout{" "}
            </button>
          </Link>
        </AloneCart>
      </div>
    </div>
  );
};

export default ProductOrderShow;
