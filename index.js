// variables
const startBtn = document.querySelector('.material-symbols-outlined')

// functions
const gamePage = (e) => {
    location.replace('./game.html')
}

// event listeners
startBtn.addEventListener('click', gamePage)
