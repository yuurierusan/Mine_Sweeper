// variables
const statusText = document.querySelector('.status')
const grid = document.querySelector('.grid')
let randomIdx = {}
let randomArr = []
let gameRunning = false
const numberOfMines = 10

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
    revealCell(e)
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

// reveal cell & numbers of bomb near it
const revealCell = (e) => {
    if (
        gameRunning &&
        e.target.classList.contains('safe') &&
        !e.target.classList.contains('flag')
    ) {
        return e.target.classList.add('reveal')
    }
}
// flag function
const toggleFlag = (e) => {
    if (gameRunning && e.target.classList.contains('flag')) {
        return e.target.classList.remove('flag')
    }
    if (gameRunning) {
        return e.target.classList.add('flag')
    }
}

// check for lose
const gameOver = (e) => {
    // checks if a flag has been placed
    if (
        e.target.classList.contains('mine') &&
        !e.target.classList.contains('flag')
    ) {
        gameRunning = false
        statusText.innerText = `You hit a mine! Game Over!`
        for (let i = 0; i < grid.children.length; i++) {
            if (grid.children[i].classList.contains('mine')) {
                grid.children[i].classList.add('show')
            }
        }
    }
}

// check for win

// // status text
// // const gameStatus = () => {
// //     document.querySelector('#mines').innerHTML = numberOfMines
// // }

// populate numbers in correspondence to mines

// reset button

// start game
const startGame = () => {
    gameRunning = true
    statusText.innerText = `Mines :${numberOfMines}`
    makeBoard()
}

startGame()
