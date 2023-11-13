

  const navMenu = document.getElementById('nav-menu');
  const links = navMenu.getElementsByTagName('a');
  

  for (let i = 0; i < links.length; i++) {
    if (links[i].href === window.location.href) {
      links[i].classList.add('link-active');
    }else{
        links[i].classList.remove('link-active');
        
    }
    console.log(links[i].href);
  }
