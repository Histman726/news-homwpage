let hamburger = document.querySelector('#hamburger img');
let menu = document.querySelector('#menu');
let header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('-right-[200%]');
  menu.classList.toggle('top-[50px]');
  menu.classList.toggle('left-[200px]');
  header.classList.toggle('overflow-hidden');
})