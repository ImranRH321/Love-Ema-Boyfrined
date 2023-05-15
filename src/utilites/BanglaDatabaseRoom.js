const saveCartStoreData = () => {
  let importationCart = {};
  const storeData = localStorage.getItem("fatherShopStoreDb");
  if (storeData) {
    importationCart = JSON.parse(storeData);
  }
  return importationCart;
};

const addStoreCartDb = (id) => {
  const myCart = saveCartStoreData();
  /*  
 if (!myCart[id]) {
    myCart[id] = 1;
  } else {
    myCart[id] = myCart[id] + 1;
  }
 */
  !myCart[id] ? (myCart[id] = 1) : (myCart[id] = myCart[id] + 1);

  localStorage.setItem("fatherShopStoreDb", JSON.stringify(myCart));
};

const deletedOrderProduct = (id) => {
  // alert(id)
  const storeShoppingCart = saveCartStoreData();
  /* 
    if (id in storeShoppingCart) {
    delete storeShoppingCart[id];
    localStorage.setItem("fatherShopStoreDb", JSON.stringify(storeShoppingCart))
  } 
  */
  /* 
  if (storeShoppingCart) {
    delete storeShoppingCart[id];
    localStorage.setItem(
      "fatherShopStoreDb",
      JSON.stringify(storeShoppingCart)
    );
  } */

  id && delete storeShoppingCart[id];
  localStorage.setItem("fatherShopStoreDb", JSON.stringify(storeShoppingCart));
};

export { saveCartStoreData, addStoreCartDb, deletedOrderProduct };
