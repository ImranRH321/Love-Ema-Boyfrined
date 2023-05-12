import React from "react";

const AloneCart = ({ originalCart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of originalCart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="text-start sticky text-purple-900 text-2xl top-9 p-5 ">
      <h5>Order Quantity: {quantity}</h5>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default AloneCart;
