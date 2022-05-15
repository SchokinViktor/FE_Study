let navOpener = document.querySelector('.js-nav-opener');
let header = document.querySelector('.js-header');

navOpener.addEventListener('click', () => {
    if (header.classList.contains('active')) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }
});