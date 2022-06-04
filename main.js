let shop = document.getElementById("shop");

let shopItems = [
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
    id: 1,
    name: "Pizza",
    price: 2.5,
    img: "./images/hamburger.png",
  },
  {
    id: 1,
    name: "Donut",
    price: 0.3,
    img: "./images/hamburger.png",
  },
  {
    id: 1,
    name: "Taco",
    price: 0.9,
    img: "./images/hamburger.png",
  },
  {
    id: 1,
    name: "Ice-cream",
    price: 0.5,
    img: "./images/hamburger.png",
  },
  {
    id: 1,
    name: "Chicken Bucket",
    price: 3,
    img: "./images/hamburger.png",
  },
  {
    id: 1,
    name: "Frensh Fries",
    price: 0.5,
    img: "./images/hamburger.png",
  },
];

let generateShopItems = () => {
  return (shop.innerHTML = shopItems
    .map(
      (item) =>
        `
      <div class="item">
        <img src="./images/hamburger.png" alt="item" />
        <div class="item__content">
          <h3>${item.name} <span>${item.price}$</span></h3>
          <div class="item__content--controls">
            <i class="fa-solid fa-minus"></i>
            <span class="quantity">0</span>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
      `
    )
    .join(""));
};

generateShopItems();
