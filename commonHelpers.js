import"./assets/toggle_theme-e463d6d1.js";import{a as n}from"./assets/vendor-1c5e86dd.js";const c="https://books-backend.p.goit.global/books/";async function i(){const o="top-books";return await n.get(`${c}${o}`)}const g=document.querySelector(".categories-books-all");document.querySelector(".categories-books-title");window.addEventListener("load",l);async function l(){try{const o=await i(),e=b(o.data);console.log("topBooks",o),d(e)}catch(o){console.log(o)}}function b(o=[]){return o.map(({list_name:e,books:t})=>`
      <div class="categories-books-genre-title"> ${e}
        <ul class="categories-books-genre-all-books">
        ${k(t)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function k(o=[]){return o.map(({_id:e,list_name:t,author:a,book_image:r,title:s})=>`
      <li class="categories-books-genre-book" data-id="${e}" data-genre="${t}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${r}" alt="Title - '${s}'">
        </div>
        <h2 class="categories-books-genre-book-title">${s}</h2>
        <h3 class="categories-books-genre-book-author">${a}</h3>
      </li>
      `).join("")}function d(o){g.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
