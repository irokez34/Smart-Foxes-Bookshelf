(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}})();const h=document.getElementById("nav-menu"),s=h.getElementsByTagName("a"),u=document.querySelector(".icon-basket");for(let r=0;r<s.length;r++)s[r].href===window.location.href?(s[r].classList.add("link-active"),u.classList.add("link-active-svg")):(s[r].classList.remove("link-active"),u.classList.remove("link-active-svg"));const c=document.querySelector(".select-menu"),f=c.querySelector(".active-user-acc"),g=c.querySelectorAll(".option");c.querySelector(".user-name");f.addEventListener("click",()=>c.classList.toggle("active"));g.forEach(r=>{r.addEventListener("click",()=>{c.classList.remove("active")})});const a=document.getElementById("theme-switch"),o=document.body;a.addEventListener("click",p);document.addEventListener("DOMContentLoaded",L);const l="swicher";function p(){if(a.checked){o.classList.replace("theme-light","theme-dark"),localStorage.setItem(l,"theme-dark");return}o.classList.replace("theme-dark","theme-light"),localStorage.setItem(l,"theme-light")}function L(){if(localStorage.getItem(l)==="theme-dark"){o.classList.replace("theme-light","theme-dark"),a.checked=!0;return}o.classList.replace("theme-dark","theme-light")}
//# sourceMappingURL=toggle_theme-056aedf1.js.map
