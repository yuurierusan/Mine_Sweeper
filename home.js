// variables
const startBtn = document.querySelector('.material-symbols-outlined')

// functions
const gamePage = (e) => {
    console.log('hi')
    location.replace('./game.html')
}

// event listeners
startBtn.addEventListener('click', gamePage)
