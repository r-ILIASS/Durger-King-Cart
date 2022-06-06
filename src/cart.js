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
        let total = 121;

        return `<div class="cartItem green-shadow">
                  <img src="${search.img}" alt="chicken-bucket" />
                    <div class="cartItem__content">
                    <h1>${search.name} ${search.price} $</h1>
                    <div class="cartItem__content--total">Total: <span>${total} $</span></div>
                    <div class="cartItem__content--controls">
                      <i class="fa-solid fa-minus"></i>
                      <span class="quantity">${basketItem.item}</span>
                      <i class="fa-solid fa-plus"></i>
                      </div>
                    </div>
                    <button class="delete" onclick="deleteItem(${search.id})">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                </div>`;
      })
      .join("");
  }
};

generateCartItems();

const deleteItem = (id) => {
  // todo
  console.log("id: ", id, "Deleted");
};
