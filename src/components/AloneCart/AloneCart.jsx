import React from "react";

const AloneCart = ({ originalCart ,setOriginalCart}) => {
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
  
    const handlerAllCartRemove = () => {
      setOriginalCart([])
      localStorage.removeItem("fatherShopStoreDb");
    }


  return (
 <div>
     <div className="text-start  bg-lime-500 text-2xl top-9 p-5 ">
      <h5>Order Quantity: {quantity}</h5>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
      <button onClick={handlerAllCartRemove} className="btn btn-danger  bold btn-sm">Clear cArt</button>
    <button className="btn btn-primary ms-4 btn-sm">Order View</button>
    </div>
 </div>
  );
};

export default AloneCart;
