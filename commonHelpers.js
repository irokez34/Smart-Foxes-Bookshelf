import"./assets/back_to_top-d4232f0b.js";import{a as n}from"./assets/vendor-1c5e86dd.js";const i="https://books-backend.p.goit.global/books/";async function g(){const e="category-list";return await n.get(`${i}${e}`)}async function d(){const e="top-books";return await n.get(`${i}${e}`)}async function u(e){const o="category?category=";return await n.get(`${i}${o}${e}`)}const l={AllCategoriesContainer:document.querySelector(".all-categories-container"),AllCategoriesList:document.querySelector(".js-categories-list")};function b(e){return e.map(({list_name:o})=>`<li class="categories-list-item"><a href="#">${o}</a></li>`).join("")}k();g().then(e=>{l.AllCategoriesList.insertAdjacentHTML("beforeend",b(e.data))}).catch(e=>console.log(e));function k(){const e=document.createElement("li");e.classList.add("categories-list-item","category-active"),e.textContent="All Categories",l.AllCategoriesList.prepend(e)}const c=document.querySelector(".categories-books-all"),m=document.querySelector(".categories-books-title"),y=document.querySelector(".loader");window.addEventListener("load",p);c.addEventListener("click",C);async function p(){y.style.display="none";try{const e=await d(),o=$(e.data);f(o)}catch(e){console.log(e)}}function $(e=[]){return e.map(({list_name:o,books:t})=>`
      <div class="categories-books-genre-title"> ${o}
        <ul class="categories-books-genre-all-books">
        ${h(t)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function h(e=[]){return e.map(({_id:o,list_name:t,author:s,book_image:a,title:r})=>`
      <li class="categories-books-genre-book" data-id="${o}" data-genre="${t}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${a}" alt="Title - '${r}'">
        </div>
        <h2 class="categories-books-genre-book-title">${r}</h2>
        <h3 class="categories-books-genre-book-author">${s}</h3>
      </li>
      `).join("")}function f(e){c.insertAdjacentHTML("beforeend",e)}async function C(e){if(!e.target.classList.contains("categories-books-btn"))return;const t=e.target.previousElementSibling.firstElementChild.dataset.genre;m.innerHTML=t;try{const s=await u(t),a=L(s.data);v(a)}catch(s){console.log(s)}}function L(e=[]){return e.map(({_id:o,list_name:t,author:s,book_image:a,title:r})=>`
      <div class="categories-books-genre-all-books">
        <div class="categories-books-genre-books" data-id="${o}" data-genre="${t}">
          <div class="categories-books-genre-book-img-thumb">
            <img class="categories-books-genre-book-img"
              src="${a}" alt="Title - '${r}'">
          </div>
          <h2 class="categories-books-genre-book-title">${r}</h2>
          <h3 class="categories-books-genre-book-author">${s}</h3>
        </div>
      </div> 
      `).join("")}function v(e){c.innerHTML=e}
//# sourceMappingURL=commonHelpers.js.map
