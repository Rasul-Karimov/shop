
const button = document.querySelector('.icon-menu')

button.addEventListener("click", function () {
    button.closest('.header').classList.toggle('_active')
})
