import { getCategoryList } from '../js/BOOKS_API.js';

const elem = {
  AllCategoriesContainer: document.querySelector('.all-categories-container'),
  AllCategoriesList: document.querySelector('.js-categories-list'),
};

// Функція створення розмітки

function createMarkupCategoryList(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories-list-item"><a href="#">${list_name}</a></li>`
    )
    .join('');
}

// Рендеринг

allCategoriesStatic();

getCategoryList()
  .then(object => {
    elem.AllCategoriesList.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoryList(object.data)
    );
  })
  .catch(error => console.log(error));

// 'All Categories' завжди перше в списку

function allCategoriesStatic() {
  const staticName = document.createElement('li');
  staticName.classList.add('categories-list-item', 'category-active');
  staticName.textContent = 'All Categories';
  elem.AllCategoriesList.prepend(staticName);
}
