import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as l}from"./assets/vendor-1c5e86dd.js";const d="https://books-backend.p.goit.global/books/";async function g(){const e="top-books";return await l.get(`${d}${e}`)}const c=document.getElementById("theme-switch"),o=document.body;c.addEventListener("click",k);document.addEventListener("DOMContentLoaded",h);const a="swicher";function k(){if(c.checked){o.classList.replace("theme-light","theme-dark"),localStorage.setItem(a,"theme-dark");return}o.classList.replace("theme-dark","theme-light"),localStorage.setItem(a,"theme-light")}function h(){if(localStorage.getItem(a)==="theme-dark"){o.classList.replace("theme-light","theme-dark"),c.checked=!0;return}o.classList.replace("theme-dark","theme-light")}const m=document.querySelector(".categories-books-all");document.querySelector(".categories-books-title");window.addEventListener("load",u);async function u(){try{const e=await g(),t=b(e.data);console.log("topBooks",e),L(t)}catch(e){console.log(e)}}function b(e=[]){return e.map(({list_name:t,books:s})=>`
      <div class="categories-books-genre-title"> ${t}
        <ul class="categories-books-genre-all-books">
        ${p(s)}
        </ul>
        <button class="categories-books-btn">see more</button>
      </div>
      `).join("")}function p(e=[]){return e.map(({_id:t,list_name:s,author:n,book_image:i,title:r})=>`
      <li class="categories-books-genre-book" data-id="${t}" data-genre="${s}">
        <div class="categories-books-genre-book-img-thumb">
          <img class="categories-books-genre-book-img"
            src="${i}" alt="Title - '${r}'">
        </div>
        <h2 class="categories-books-genre-book-title">${r}</h2>
        <h3 class="categories-books-genre-book-author">${n}</h3>
      </li>
      `).join("")}function L(e){m.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map
