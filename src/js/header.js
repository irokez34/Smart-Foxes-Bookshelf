

  const navMenu = document.getElementById('nav-menu');
  const links = navMenu.getElementsByTagName('a');
  const svgEl = document.querySelector('.icon-basket');

  for (let i = 0; i < links.length; i++) {
    if (links[i].href === window.location.href) {
      links[i].classList.add('link-active');
      svgEl.classList.add('link-active-svg');
    }else{
        links[i].classList.remove('link-active');
        svgEl.classList.remove('link-active-svg');
    }
    console.log(links[i].href);
  }
