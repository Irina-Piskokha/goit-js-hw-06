const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const arrayIngredients = ingredients.map((elem) => {
  let listItem = document.createElement("li");
  listItem.textContent = elem;
  listItem.classList.add("item");
  return listItem;
});

list.append(...arrayIngredients);
