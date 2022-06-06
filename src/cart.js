let basket = JSON.parse(localStorage.getItem("data")) || [];

const itemsSum = () => {
  let cartCounter = document.querySelector(".cartCounter");

  let count = 0;
  basket.forEach(({ item }) => (count += item));

  cartCounter.innerHTML = count;
};

itemsSum();
