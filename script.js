// variables
const grid = document.querySelector('.grid')
let randomIdx = {}
let randomArr = []
// make a board with random mines
const makeBoard = () => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            // create div
            const cell = document.createElement('div')
            // add id to div
            cell.id = x.toString() + '-' + y.toString()
            // be able to click board cells
            cell.addEventListener('click', clickedCell)

            // be able to add flags to cells on click
            cell.addEventListener('contextmenu', contextCell)
            grid.append(cell)
        }
    }
    randomizeClasses()
}
const clickedCell = (e) => {
    gameOver(e)
}
const contextCell = (e) => {
    e.preventDefault()
    toggleFlag(e)
}
// add classes to div of mine or safe
const randomizeClasses = () => {
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

// flag function
const toggleFlag = (e) => {
    if (e.target.classList.contains('flag')) {
        return e.target.classList.remove('flag')
    }
    return e.target.classList.add('flag')
}

// check for lose
const gameOver = (e) => {
    const statusText = document.querySelector('.status')
    if (
        e.target.classList.contains('mine') &&
        !e.target.classList.contains('flag')
    ) {
        statusText.innerText = `You hit a mine! Game Over!`
        for (let i = 0; i < grid.children.length; i++) {
            if (grid.children[i].classList.contains('mine')) {
                grid.children[i].classList.add('show')
            }
        }
    }
}

// if you hit mine it reveals
const mineHider = () => {}

// check for win

// click cell and

// status text
// const numberOfMines = 10
// const statusText = ``
// const gameStatus = () => {
//     document.querySelector('#mines').innerHTML = numberOfMines
// }

// populate numbers in correspondence to mines

// reset button

// start game
const startGame = () => {
    // statusText
    makeBoard()
}

startGame()
