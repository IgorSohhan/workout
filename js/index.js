const menuBtn = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
});

const button = document.querySelector('.back-to-top');

button.addEventListener('click', e => {

  e.preventDefault();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});