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
    // console.log(e.target.id)
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

// status text
// const numberOfMines = 10
// const statusText = ``
// const gameStatus = () => {
//     document.querySelector('#mines').innerHTML = numberOfMines
// }

// flag function
const toggleFlag = (e) => {
    console.log(e.target)
    if (e.target.classList.contains('flag')) {
        return e.target.classList.remove('flag')
    }
    return e.target.classList.add('flag')
}

// const flag = document
//     .querySelector('#cell', toggleFlag)
//     .addEventListener('contextmenu')

// populate numbers in correspondence to mines

// check for win/lose
const gameOver = (click) => {}

// reset button

// start game
const startGame = () => {
    // statusText
    makeBoard()
}

startGame()
