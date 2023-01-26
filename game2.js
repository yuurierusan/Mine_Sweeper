// variables
const ejectBtn = document.querySelector('.material-symbols-sharp')
const resetBtn = document.querySelector('.material-symbols-sharp')
// functions
const homePage = (e) => {
    location.replace('./home.html')
}

const retry = (e) => {
    location.reload()
}
// event listeners
ejectBtn.addEventListener('click', homePage)
