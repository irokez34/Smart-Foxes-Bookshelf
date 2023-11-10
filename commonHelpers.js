import"./assets/toggle_theme-e463d6d1.js";import{a}from"./assets/vendor-1c5e86dd.js";const r="https://books-backend.p.goit.global/books/";async function c(){const o="category-list";return await a.get(`${r}${o}`)}async function l(){const o="top-books";return await a.get(`${r}${o}`)}const g={AllCategoriesContainer:document.querySelector(".all-categories-container"),AllCategoriesList:document.querySelector(".js-categories-list")};function u(o){return o.map(({list_name:e})=>`<li class="categories-list-item"><a href="#">${e}</a></li>`).join("")}c().then(o=>{g.AllCategoriesList.insertAdjacentHTML("beforeend",u(o.data))}).catch(o=>console.log(o));const b=document.querySelector(".categories-books-all");document.querySelector(".categories-books-title");window.addEventListener("load",d);async function d(){try{const o=await l(),e=k(o.data);console.log("topBooks",o),p(e)}catch(o){console.log(o)}}function k(o=[]){return o.map(({list_name:e,books:t})=>`
      <div class="categories-books-genre-title"> ${e}
        <ul class="categories-books-genre-all-books">
        ${m(t)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function m(o=[]){return o.map(({_id:e,list_name:t,author:n,book_image:i,title:s})=>`
      <li class="categories-books-genre-book" data-id="${e}" data-genre="${t}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${i}" alt="Title - '${s}'">
        </div>
        <h2 class="categories-books-genre-book-title">${s}</h2>
        <h3 class="categories-books-genre-book-author">${n}</h3>
      </li>
      `).join("")}function p(o){b.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
