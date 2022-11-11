const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = `${element}`;
  ingredientEl.classList.add('item');
  return ingredientEl;
});
list.append(...elements);
// console.log(ingredientEl)








