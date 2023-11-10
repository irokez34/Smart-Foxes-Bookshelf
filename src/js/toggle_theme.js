const themeSwitcher = document.getElementById("theme-switch");
const bodyEl = document.body;

themeSwitcher.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);

const LS_KEY = "swicher";

function onCheckBoxChange() {
    if (themeSwitcher.checked) {
      bodyEl.classList.replace("theme-light", "theme-dark");
      localStorage.setItem(LS_KEY, "theme-dark");
      return;
    }
  
    bodyEl.classList.replace("theme-dark", "theme-light");
    localStorage.setItem(LS_KEY, "theme-light");

  
  }

  function setThemeOnLoad() {
    const lsData = localStorage.getItem(LS_KEY);
    if (lsData === "theme-dark") {
      bodyEl.classList.replace("theme-light", "theme-dark");
      themeSwitcher.checked = true;
      return;
    }
    bodyEl.classList.replace("theme-dark", "theme-light");
}
