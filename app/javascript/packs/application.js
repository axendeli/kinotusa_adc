// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener('DOMContentLoaded', function() {
  let burger = document.querySelector('.burger')

  let menu = document.querySelector('.menu')


  burger.addEventListener('click', function() {
  burger.classList.toggle('burger-open')
  if (burger.className == 'burger burger-open') {
      menu.classList.toggle('menu-open')
    } else {
      menu.classList.remove('menu-open')
    }
  })
}, false);





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
