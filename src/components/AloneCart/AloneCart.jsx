import React from "react";
import { Link } from "react-router-dom";

const AloneCart = ({ originalCart, setOriginalCart }) => {
  console.log("cart", originalCart);
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of originalCart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  const handlerAllCartRemove = () => {
    setOriginalCart([]);
    localStorage.removeItem("fatherShopStoreDb");
  };

  return (
    <div>
      <div className="text-start text-2xl top-9 p-5 ">
        <h5>Order Quantity: {quantity}</h5>
        <p>Total Price: ${totalPrice} </p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        <button
          onClick={handlerAllCartRemove}
          className="btn btn-danger  bold btn-sm"
        >
          Clear cArt
        </button>
        <Link to="/order">
          <button className="btn btn-primary ms-4 btn-sm">My Order </button>
        </Link>
      </div>
    </div>
  );
};

export default AloneCart;
