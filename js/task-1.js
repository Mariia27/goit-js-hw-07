// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
//элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const findAllCategories = document.querySelectorAll('.item');
console.log(`В списке ${findAllCategories.length} категории.`);
//===================================================
findAllCategories.forEach(item => {
const findNameOfTittle = document.querySelector('h2').textContent; 
    console.log(` Категория: ${item}`);
 });
//==========================================================

const findNumberOfElement = document.querySelectorAll('.item ul li').length;
console.log(`Количество элементов: ${findNumberOfElement}`);



