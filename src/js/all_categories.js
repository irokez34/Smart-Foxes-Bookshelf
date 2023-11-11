import { getCategoryList } from '../js/BOOKS_API';
import moduleName from 'module';

const elem = {
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  allCategoriesList: document.querySelector('.js-categories-list'),
  allCategoriesListItem: document.querySelector('.js-categories-list-item')
};

// Функція створення розмітки

function createMarkupCategoryList(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories-list-item js-categories-list-item link"><a href="">${list_name}</a></li>`
    )
    .join('');
}

// Рендеринг

allCategoriesStatic();

getCategoryList()
  .then(object => {
    elem.allCategoriesList.insertAdjacentHTML(
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
  elem.allCategoriesList.prepend(staticName);
}

// Функція кліку по категорії

elem.allCategoriesContainer.addEventListener('click', onCategoryClick); 

function onCategoryClick (){
  if(!evt.target.classList.contains('.js-categories-list-item'))
  return;
}

