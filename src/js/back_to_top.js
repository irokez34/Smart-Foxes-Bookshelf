const buttonBackToTopEl = document.querySelector('.back-to-top');

buttonBackToTopEl.addEventListener('click', scrollToTop)

window.onscroll = () => {
        toggleTopButton();
    }

function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
            buttonBackToTopEl.classList.remove('is-hidden');
    } else {
            buttonBackToTopEl.classList.add('is-hidden');
    }
}