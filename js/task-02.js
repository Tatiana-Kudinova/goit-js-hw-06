const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector(`#ingredients`);
const ingredientsEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement(`li`);
  console.log(ingredient);
  ingredientEl.classList = `item`;
  ingredientEl.textContent = `${ingredient}`;
  return ingredientEl;
});
ingredientsList.append(...ingredientsEl);
