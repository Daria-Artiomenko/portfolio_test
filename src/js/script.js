const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.tools-tool__item-pros'),
      lines = document.querySelectorAll('.tools-tool__item-scale span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});