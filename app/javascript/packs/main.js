
let burger = document.querySelector('.burger')
if (burger !== null) {
   burger.addEventListener('ended', myHandler, false);
}

let menu = document.querySelector('.menu')


burger.addEventListener('click', function() {
burger.classList.toggle('burger-open')
if (burger.className == 'burger burger-open') {
    menu.classList.toggle('menu-open')
  } else {
    menu.classList.remove('menu-open')
  }
})
