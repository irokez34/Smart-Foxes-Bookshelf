const d=document.getElementById("nav-menu"),o=d.getElementsByTagName("a"),i=document.querySelector(".icon-basket");for(let e=0;e<o.length;e++)o[e].href===window.location.href?(o[e].classList.add("link-active"),i.classList.add("link-active-svg")):(o[e].classList.remove("link-active"),i.classList.remove("link-active-svg"));const t=document.querySelector(".select-menu"),r=t.querySelector(".active-user-acc"),m=t.querySelectorAll(".option");t.querySelector(".user-name");r.addEventListener("click",()=>t.classList.toggle("active"));m.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("active")})});const l=document.getElementById("theme-switch"),n=document.body;l.addEventListener("click",u);document.addEventListener("DOMContentLoaded",h);const s="swicher";function u(){if(l.checked){n.classList.replace("theme-light","theme-dark"),localStorage.setItem(s,"theme-dark");return}n.classList.replace("theme-dark","theme-light"),localStorage.setItem(s,"theme-light")}function h(){if(localStorage.getItem(s)==="theme-dark"){n.classList.replace("theme-light","theme-dark"),l.checked=!0;return}n.classList.replace("theme-dark","theme-light")}(()=>{const e={openMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};e.openMenuBtn.addEventListener("click",a),e.closeMenuBtn.addEventListener("click",a);function a(){e.mobileMenu.classList.toggle("is-active")?(e.closeMenuBtn.classList.add("active"),e.openMenuBtn.classList.add("hidden"),document.body.style.overflow="hidden"):(e.closeMenuBtn.classList.remove("active"),e.openMenuBtn.classList.remove("hidden"),document.body.style.overflow="")}})();const k="/Smart-Foxes-Bookshelf/amazon.png",p="/Smart-Foxes-Bookshelf/books.png",y="/Smart-Foxes-Bookshelf/assets/sprite-dad9da99.svg";document.addEventListener("DOMContentLoaded",function(){document.getElementById("additionalItems").style.display="none"});const c=document.querySelector(".back-to-top");c.addEventListener("click",v);window.onscroll=()=>{g()};function v(){window.scrollTo({top:0,behavior:"smooth"})}function g(){document.body.scrollTop>20||document.documentElement.scrollTop>20?c.classList.remove("is-hidden"):c.classList.add("is-hidden")}export{k as a,p as b,y as i};
//# sourceMappingURL=back_to_top-a27412cb.js.map
