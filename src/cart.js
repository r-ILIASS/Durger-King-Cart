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
    // Generate friendly message and go home button
    bill.innerHTML = `
      <h1>Your cart is empty!</h1>
      <a class="goHome" href="index.html">Check out our menu!</a>
    `;
    cartItems.innerHTML = ``;
  } else {
    // Generate the cart
    cartItems.innerHTML = basket
      .map((basketItem) => {
        let search = shopItems.find(
          (shopItem) => shopItem.id === basketItem.id
        ); // pull item from dummy data

        let total = (search.price * basketItem.item).toFixed(2); // calculate the total

        let cartItem = `
        <div id="${search.id}" class="cartItem green-shadow">
          <img src="${search.img}" alt="chicken-bucket" />
          <div class="cartItem__content">
          <h1>${search.name} ${search.price} $</h1>
          <div class="cartItem__content--total">Total: <span>${total} $</span></div>
          <div class="cartItem__content--controls">
            <i onclick="decrement(${search.id})" class="fa-solid fa-minus"></i>
            <span class="quantity">${basketItem.item}</span>
            <i onclick="increment(${search.id})" class="fa-solid fa-plus"></i>
            </div>
          </div>
          <button class="delete" onclick="deleteItem(${search.id})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        `;

        // return the populated HTML template
        return cartItem;
      })
      .join("");
  }
};

generateCartItems();

const deleteItem = (id) => {
  // remove the item from the local storage
  basket = basket.filter((x) => x.id !== id);
  localStorage.setItem("data", JSON.stringify(basket));
  // remove the item from the UI
  let itemToDelete = document.getElementById(id);
  itemToDelete.remove();
  // update the cart counter
  itemsSum();
  totalPrice();
  // reload the page if there are no remaining items
  if (basket.length === 0) location.reload();
};

const decrement = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);

  if (search === undefined) return;
  search.item--;
  update(id);

  generateCartItems();

  if (search.item === 0) {
    deleteItem(id);
  }

  basket = basket.filter((basketItem) => basketItem.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

const increment = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);

  if (search === undefined) {
    basket.push({ id, item: 1 });
  } else {
    search.item++;
  }

  localStorage.setItem("data", JSON.stringify(basket));

  update(id);
  generateCartItems();
};

const update = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);

  document.getElementById(id).querySelector(".quantity").innerHTML =
    search.item;

  itemsSum();
  totalPrice();
};

const totalPrice = () => {
  if (basket.length === 0) return;

  let totalPrice = basket.map((basketItem) => {
    let search = shopItems.find((shopItem) => shopItem.id === basketItem.id);
    return search.price * basketItem.item;
  });

  totalPrice = totalPrice.reduce((a, b) => a + b, 0);

  bill.innerHTML = `
  <h1 id="totalPrice">Total Price: <span>${totalPrice} $</span></h1>
  <div>
    <button class="checkout">Checkout</button>
    <button class="cancel">Cancel Order</button>
  </div>
`;
};

totalPrice();
