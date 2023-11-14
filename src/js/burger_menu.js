(() =>{
    const refs = {
        openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
       closeMenuBtn:document.querySelector('[data-mobile-menu-close]'), 
       mobileMenu:document.querySelector('[data-mobile-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click',toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
  
    function toggleModal(){
     const isOpen = refs.mobileMenu.classList.toggle('is-active');
     
     if (isOpen) {
      refs.closeMenuBtn.classList.add('active');
      refs.openMenuBtn.classList.add('hidden');
      document.body.style.overflow = "hidden";
     }else{
      refs.closeMenuBtn.classList.remove('active');
      refs.openMenuBtn.classList.remove('hidden');
      document.body.style.overflow = "";  
     }
     }
  
  
  })();