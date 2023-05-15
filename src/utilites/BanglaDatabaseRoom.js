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



export { saveCartStoreData, addStoreCartDb };
