// variables
const ejectBtn = document.querySelector('.material-symbols-sharp')
const resetBtn = document.querySelector('.material-symbols-rounded')
// functions
const homePage = (e) => {
    location.replace('./home.html')
}

const retry = (e) => {
    location.reload()
}
// event listeners
resetBtn.addEventListener('click', retry)
ejectBtn.addEventListener('click', homePage)
