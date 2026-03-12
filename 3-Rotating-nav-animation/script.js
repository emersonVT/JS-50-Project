const open_menu = document.getElementById('open');
const close_menu = document.getElementById('close');
const container = document.querySelector('.container');

open_menu.addEventListener('click', () => container.classList.add('show-nav'));
close_menu.addEventListener('click', () => container.classList.remove('show-nav'));