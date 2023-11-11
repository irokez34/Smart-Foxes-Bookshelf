import { getCategoryList } from '../js/BOOKS_API';

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
  )}
)
.catch(error => console.log(error));