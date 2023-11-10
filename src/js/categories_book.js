import { all } from 'axios';
import { getTopBooks, getBooksByCategory } from './BOOKS_API';

const categoriesBook = document.querySelector('.categories-books-all');
const categoriesBooksTitle = document.querySelector('.categories-books-title');

window.addEventListener('load', onLoad);

async function onLoad() {
  try {
    const topBooks = await getTopBooks();
    const categories = createCategories(topBooks.data);
    console.log('topBooks', topBooks);
    addCategoriesMarkup(categories);
  } catch (err) {
    console.log(err);
  }
}

function createCategories(arr = []) {
  return arr
    .map(({ list_name, books }) => {
      return `
      <div class="categories-books-genre-title"> ${list_name}
        <ul class="categories-books-genre-all-books">
        ${createCard(books)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `;
    })
    .join('');
}

function createCard(books = []) {
  return books
    .map(({ _id, list_name, author, book_image, title }) => {
      return `
      <li class="categories-books-genre-book" data-id="${_id}" data-genre="${list_name}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${book_image}" alt="Title - '${title}'">
        </div>
        <h2 class="categories-books-genre-book-title">${title}</h2>
        <h3 class="categories-books-genre-book-author">${author}</h3>
      </li>
      `;
    })
    .join('');
}

function addCategoriesMarkup(markup) {
  categoriesBook.insertAdjacentHTML('beforeend', markup);
}
