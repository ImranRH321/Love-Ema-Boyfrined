import { saveCartStoreData } from "../utilites/BanglaDatabaseRoom";

const productLoadDataAndCart = async () => {
  const res = await fetch("products.json");
  const products = await res.json();

  //   if the  find database exist cart
  const storeDbProducts = saveCartStoreData();
 let saveCart = [];
  for (const id in storeDbProducts) {
    const findProduct = products.find(product=> product.id === id);
    if(findProduct){
        findProduct.quantity =storeDbProducts[id]; 
        saveCart.push(findProduct)
    }
  }

  return saveCart;
};

export default productLoadDataAndCart;
