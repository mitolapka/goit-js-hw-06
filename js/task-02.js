const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const elements = []
ingredients.forEach((ingredient) => { 
  const heading = document.createElement("li");
  heading.textContent = ingredient;
  heading.classList.add('item');
  list.append(heading);
})
 list.append(elements);