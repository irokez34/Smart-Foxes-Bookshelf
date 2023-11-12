import { getCategoryList, getBooksByCategory } from '../js/BOOKS_API';
import {
  createCardByGenre,
  addCardByGenre,
} from '../js/categories_book';


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
        `<li class="categories-list-item js-categories-list-item" data-category='${list_name}'><a href="">${list_name}</a></li>`
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


// function onCategoryClick(evt) {
//   if (!evt.target.classList.contains('.js-categories-list-item')) {
//     return;
//   }
//   const arrClass = [...elem.allCategoriesContainer.children];
//   arrClass.map(item => item.classList.remove('category-active'));
//   evt.target.classList.add('category-active');

//   const categoryName = evt.target.dataset.list_name;

//   if (evt.target.classList.contains('js-all-categories')) {
//     return;
//   } else {
//     getBooksByCategory(categoryName);
//   }
// }
// elem.allCategoriesContainer.addEventListener('click', onCategoryClick);

// async function onCategoryClick(evt) {
//   if (!evt.target.classList.contains('js-categories-list-item')) {
//     return;
//   }
//   const categoryLink = evt.target.dataset.category;
//   elem.categoriesBook.innerHTML = categoryLink; 
//   try {
//     const booksByListName = await getBooksByCategory(categoryLink);

//     const allBooksByGenre = createCardByGenre(booksByListName.data);

//     addCardByGenre(allBooksByGenre);
//   } catch (err) {
//     console.log(err);
//   }
// }
