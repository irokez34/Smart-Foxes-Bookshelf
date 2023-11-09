const categoriesBook = document.querySelector('.categories-books-all');
const categoriesBooksTitle = document.querySelector('.categories-books-title');

function createCard(data = []) {
  return data
    .map(({ books: { _id, list_name, author, book_image, title } }) => {
      return `
        <li class="categories-books-genre-book" data-id="${_id}" data-genre="${list_name}">
            <img class="categories-books-genre-book-img" src="${book_image}" alt="Title - ${title}">
            <h2 class="categories-books-genre-book-title">${title}</h2>
            <h3 class="categories-books-genre-book-author">${author}</h3>
         </li>
        `;
    })
    .join('');
}
