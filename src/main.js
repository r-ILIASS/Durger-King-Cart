let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShopItems = () => {
  return (shop.innerHTML = shopItems
    .map((item) => {
      let search = basket.find((basketItem) => basketItem.id === item.id);
      let count = "0";
      if (search !== undefined) count = search.item;

      return `
      <div class="item" id="${item.id}">
        <img src="${item.img}" alt="${item.name} image" />
        <div class="item__content">
          <h3>${item.name} <span>${item.price}$</span></h3>
          <div class="item__content--controls">
            <i onclick="decrement(${item.id})" class="fa-solid fa-minus"></i>
            <span class="quantity">${count}</span>
            <i onclick="increment(${item.id})" class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      `;
    })
    .join(""));
};

generateShopItems();

const decrement = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);
  if (search === undefined) return;
  if (search.item === 0) return;
  search.item--;

  update(id);

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
};

const update = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);

  document.getElementById(id).querySelector(".quantity").innerHTML =
    search.item;

  itemsSum();
};

const itemsSum = () => {
  let cartCounter = document.querySelector(".cartCounter");

  let count = 0;
  basket.forEach(({ item }) => (count += item));

  cartCounter.innerHTML = count;
};

itemsSum(); // Run this function at least once to update the cart counter on refresh.
