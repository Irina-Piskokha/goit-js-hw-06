const listItems = document.querySelectorAll(".item");
console.log("Number of categories: " + listItems.length);

listItems.forEach((el) => {
  const titleCategory = el.querySelector("h2");
  console.log("Category: " + titleCategory.textContent);
  const categoryElem = el.querySelectorAll("li");
  console.log("Elements: " + categoryElem.length);
});
