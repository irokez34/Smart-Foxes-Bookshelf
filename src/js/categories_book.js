import { all } from 'axios';
import { getTopBooks, getBooksByCategory } from './BOOKS_API';

const categoriesBook = document.querySelector('.categories-books-all');
const categoriesBooksTitle = document.querySelector('.categories-books-title');
const loader = document.querySelector('.loader');

window.addEventListener('load', onLoad);
categoriesBook.addEventListener('click', onSeeMore);

async function onLoad() {
  loader.style.display = 'none';
  try {
    const topBooks = await getTopBooks();
    const categories = createCategories(topBooks.data);
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

async function onSeeMore(evt) {
  if (!evt.target.classList.contains('categories-books-btn')) {
    return;
  }
  const parentEl = evt.target.previousElementSibling;
  const seeMoreGenre = parentEl.firstElementChild.dataset.genre;
  categoriesBooksTitle.innerHTML = seeMoreGenre;
  try {
    const booksByGenre = await getBooksByCategory(seeMoreGenre);

    const allBooksByGenre = createCardByGenre(booksByGenre.data);

    addCardByGenre(allBooksByGenre);
  } catch (err) {
    console.log(err);
  }
}

function createCardByGenre(books = []) {
  return books
    .map(({ _id, list_name, author, book_image, title }) => {
      return `
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${_id}" data-genre="${list_name}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${book_image}" alt="Title - '${title}'">
          </div>
          <h2 class="categories-books-genre-book-title">${title}</h2>
          <h3 class="categories-books-genre-book-author">${author}</h3>
        </div>
      </div> 
      `;
    })
    .join('');
}

function addCardByGenre(markup) {
  categoriesBook.innerHTML = markup;
}

export { onSeeMore, createCardByGenre, addCardByGenre };
