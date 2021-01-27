// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]; 

const listEl = document.querySelector('#ingredients');
//console.log(listEl);
const createList = ingredient => {
const listEl = document.querySelector('#ingredients');
const elementOfList = document.createElement('li');
    elementOfList.textContent = `${ingredient}`;
    listEl.appendChild(elementOfList);
    return listEl;
};

ingredients.forEach(ingredient => {
    console.log(createList(ingredient));
})

// ingredients.map(ingredient => {
//     console.log(createList(ingredient))
// })

