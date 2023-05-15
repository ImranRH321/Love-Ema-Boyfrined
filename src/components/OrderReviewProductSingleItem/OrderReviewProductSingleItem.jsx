import React from "react";

const OrderReviewProductSingleItem = ({ product ,handleDeletedProduct}) => {
  const { shipping, quantity, price, name, img, id } = product;

  return (
    <div className="flex items-center gap-5 mx-5">
      <div>
        <img className="w-[100px]" src={img} alt="" />
      </div>

      <div className="flex-grow text-start">
        <h5>{name}</h5>
        <h5>price: ${price}</h5>
        <h5>quantity: ${quantity}</h5>
      </div>
      <div>
        <button onClick={()=>handleDeletedProduct(id)} className="btn btn-error btn-sm text-end">XDelete</button>
      </div>
      </div>
  );
};

export default OrderReviewProductSingleItem;
