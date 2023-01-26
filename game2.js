// variables
const ejectBtn = document.querySelector('.material-symbols-sharp')
const resetBtn = document.querySelector('.material-symbols-rounded')
// functions
const homePage = (e) => {
    location.replace(`https://mine_sweeper.surge.sh/`)
}

const retry = (e) => {
    location.reload()
}
// event listeners
resetBtn.addEventListener('click', retry)
ejectBtn.addEventListener('click', homePage)
