const search_btn = document.querySelector('.btn');
const search_bar = document.querySelector('.search');
const input = document.querySelector('input')
search_btn.addEventListener('click', () => {
    search_bar.classList.toggle('active');
    input.focus();
});