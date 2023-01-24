const grid = document.querySelector('.grid')
let randomIdx = {}
let randomArr = []
function makeBoard() {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const cell = document.createElement('div')
            cell.id = x.toString() + '-' + y.toString()
            grid.append(cell)
        }
    }
    randomizeClasses()
}

function randomizeClasses() {
    while (true) {
        const random = Math.floor(Math.random() * 100)
        randomIdx[random] = true
        randomArr = Object.keys(randomIdx)
        if (randomArr.length == 10) break
    }

    for (let i = 0; i < 100; i++) {
        if (randomIdx[i] == true) {
            grid.children[i].classList.add('mine')
        } else {
            grid.children[i].classList.add('safe')
        }
    }
}
// status
const numberOfMines = 10
const statusText = ``
const gameStatus = () => {
    document.querySelector('#mines').innerHTML = numberOfMines
}

// be able to click board cells

// be able to add flags to cells on click
// const cell = this
// cell.addEventListener('contextmenu', (toggleFlag) => {})
// oncontextmenu = (toggleFlag) => {
//     if (cell.innerHTML === '') return (cell.innerHTML = '🚩')
//     return (cell.innerHTML = '')
// }

// populate numbers in correspondence to mines

// check for win/lose
const gameOver = (click) => {
    if (cell.classList.contains('mine'))
        return (statusText.innerHTML = `You hit a mine! Game Over!`)
}

// reset button

// start game
const startGame = () => {
    // gameStatus()
    makeBoard()
}

startGame()
