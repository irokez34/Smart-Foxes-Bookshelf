
import { getCategoryList, getBooksByCategory } from './BOOKS_API.js';
import {createCardByGenre, addCardByGenre } from './categories_book.js';


const elem = {
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  allCategoriesList: document.querySelector('.js-categories-list'),
  allCategoriesListItem: document.querySelector('.js-categories-list-item'),
  categoriesBook: document.querySelector('.categories-books-all'),
  categoriesBooksTitle: document.querySelector('.categories-books-title')
};

// Функція створення розмітки

function createMarkupCategoryList(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories-list-item js-categories-list-item" value="${list_name}" data-category='${list_name}'>${list_name}</li>`
    )
    .join('');
}

// Рендеринг 

getCategoryList()
  .then(object => {
    elem.allCategoriesList.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoryList(object.data)
    );
  })
  .catch(error => console.log(error));

// Функція кліку по категорії


async function onCategoryClick(evt) {
  evt.preventDefault();
  const target = evt.target;
  const control = target.tagName == 'LI';
 if (!control) return;
  const booksByGenre = await getBooksByCategory(target.attributes.value.nodeValue);
  const allBooksByGenre = createCardByGenre(booksByGenre.data);
  addCardByGenre(allBooksByGenre);
  const valueResultTarget = target.attributes.value.nodeValue;
  const genreByWord = valueResultTarget.split(' ');
  const lastWord = genreByWord.splice(-1, 1);
  elem.categoriesBooksTitle.innerHTML = `${genreByWord.join(
    ' '
  )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
}
elem.allCategoriesContainer.addEventListener('click', onCategoryClick);
