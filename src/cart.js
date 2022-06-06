let basket = JSON.parse(localStorage.getItem("data")) || [];
let bill = document.getElementById("bill");
let cartItems = document.getElementById("cartItems");

const itemsSum = () => {
  let cartCounter = document.querySelector(".cartCounter");
  let count = 0;

  basket.forEach(({ item }) => (count += item));
  cartCounter.innerHTML = count;
};

itemsSum();

const generateCartItems = () => {
  if (basket.length === 0) {
    bill.innerHTML = `
      <h1>Your cart is empty!</h1>
      <a class="goHome" href="index.html">Check out our menu!</a>
    `;
    cartItems.innerHTML = ``;
  } else {
    cartItems.innerHTML = basket
      .map((basketItem) => {
        let search = shopItems.find(
          (shopItem) => shopItem.id === basketItem.id
        );

        return `<div class="cartItem">
                  <img src="${search.img}" alt="chicken-bucket" />
                    <div class="cartItem__content">
                      <h1>${search.name} ${search.price} $</h1>
                      <div class="cartItem__content--total">Total: <span>xxx $</span></div>
                      <div class="cartItem__content--controls">
                        <i class="fa-solid fa-minus"></i>
                        <span class="quantity">${basketItem.item}</span>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
                </div>`;
      })
      .join("");
  }
};

generateCartItems();
