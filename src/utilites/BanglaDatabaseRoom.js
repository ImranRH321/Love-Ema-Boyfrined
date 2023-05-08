const getDataDb = () => {
  let cart = {};
  const storeCartSave = localStorage.getItem("fatherShopSave");
  if (storeCartSave) {
    cart = JSON.parse(storeCartSave);
  }
  return cart;
};

const addDb = (id) => {
  const storeCart = getDataDb();
  const quantityC = storeCart[id];
  if (!quantityC) {
    storeCart[id] = 1;
  } else {
    storeCart[id] = quantityC + 1;
  }
  localStorage.setItem("fatherShopSave", JSON.stringify(storeCart));
};
addDb();

export { addDb };
