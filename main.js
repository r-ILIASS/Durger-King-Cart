let shop = document.getElementById("shop");

const shopItems = [
  {
    id: 1,
    name: "Burger",
    price: 1.3,
    img: "./images/hamburger.png",
  },
  {
    id: 2,
    name: "Hotdog",
    price: 0.5,
    img: "./images/hamburger.png",
  },
  {
    id: 3,
    name: "Pizza",
    price: 2.5,
    img: "./images/hamburger.png",
  },
  {
    id: 4,
    name: "Donut",
    price: 0.3,
    img: "./images/hamburger.png",
  },
  {
    id: 5,
    name: "Taco",
    price: 0.9,
    img: "./images/hamburger.png",
  },
  {
    id: 6,
    name: "Ice-cream",
    price: 0.5,
    img: "./images/hamburger.png",
  },
  {
    id: 7,
    name: "Chicken Bucket",
    price: 3,
    img: "./images/hamburger.png",
  },
  {
    id: 8,
    name: "Frensh Fries",
    price: 0.5,
    img: "./images/hamburger.png",
  },
];

let basket = [];

let generateShopItems = () => {
  return (shop.innerHTML = shopItems
    .map(
      (item) =>
        `
      <div class="item" id="${item.id}">
        <img src="${item.img}" alt="${item.name} image" />
        <div class="item__content">
          <h3>${item.name} <span>${item.price}$</span></h3>
          <div class="item__content--controls">
            <i onclick="decrement(${item.id})" class="fa-solid fa-minus"></i>
            <span class="quantity">0</span>
            <i onclick="increment(${item.id})" class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      `
    )
    .join(""));
};

generateShopItems();

const decrement = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);
  if (search === undefined) return;
  if (search.item === 0) return;
  search.item--;

  update(id);
};

const increment = (id) => {
  let search = basket.find((basketItem) => basketItem.id === id);

  if (search === undefined) {
    basket.push({ id, item: 1 });
  } else {
    search.item++;
  }

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
