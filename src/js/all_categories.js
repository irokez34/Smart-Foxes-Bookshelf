import { getCategoryList, getBooksByCategory } from './js/BOOKS_API';
import { createCardByGenre, addCardByGenre } from './js/categories_book';

const elem = {
  allCategoriesContainer: document.querySelector('.all-categories-container'),
  allCategoriesList: document.querySelector('.categories-list'),
  allCategoriesListItem: document.querySelector('.categories-list-item'),
  categoriesBook: document.querySelector('.categories-books-all'),
  categoriesBooksTitle: document.querySelector('.categories-books-title'),
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


// СПРОБА 1

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


// СПРОБА 2

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


// СПРОБА 3

// elem.allCategoriesList.addEventListener('click', onCategoryClick);

// async function onCategoryClick(evt) {

//   evt.preventDefault();
  
//   if (!evt.target.classList.contains('js-categories-list-item')) {
//     return;
//   }
//   const arrClass = [...elem.allCategoriesList.children];
//   arrClass.map(item => item.classList.remove('category-active'));
//   evt.target.classList.add('category-active');

//   const categoryLink = evt.target.dataset.category;

//   const genreByWord = categoryLink.split(' ');
//   const lastWord = genreByWord.splice(-1, 1);
  
//   elem.categoriesBooksTitle.innerHTML = `${genreByWord.join(
//     ' '
//     )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;



//   // categoriesBook.innerHTML = `${genreByWord.join(
//   //   ' '
//   // )} <span class="categories-books-title-accent">${lastWord.toString()}</span>`;
//   elem.categoriesBooksTitle.insertAdjacentHTML('afterend');

//   try {
//     const booksByListName = await getBooksByCategory(categoryLink);

//     const allBooksByGenre = createCardByGenre(booksByListName.data);

//     addCardByGenre(allBooksByGenre);
//   } catch (err) {
//     console.log(err);
//   }
// }
