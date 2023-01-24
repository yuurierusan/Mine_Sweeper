// variables
const board = []
const rows = 10
const columns = 10
const mines = 15

// create random bombs
const mineField = Array(mines).fill(`mine`)
const safePlain = Array(100 - mines).fill(`safe`)
const combinedArray = safePlain.concat(mineField)
for (let i = combinedArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = combinedArray[i]
    combinedArray[i] = combinedArray[j]
    combinedArray[j] = temp
}

let counter = 0
const makeBoard = () => {
    for (let x = 0; x < rows; x++) {
        let row = []
        for (let y = 0; y < columns; y++) {
            let cell = document.createElement('div')
            cell.id = x.toString() + '-' + y.toString()
            const random = Math.floor(Math.random() * 100)

            if (combinedArray[random] === `mine`) {
                counter++
            }
            if (counter <= 10) {
                cell.classList.add(combinedArray[random])
            }
            document.querySelector('.grid').append(cell)
            row.push(cell)
        }
        board.push(row)
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

// populate board with mines
const minePosition = []
// populate numbers in correspondence to mines

// check for win/lose
const gameOver = (click) => {
    if (cell.classList.contains('mine'))
        return (statusText.innerHTML = `You hit a mine! Game Over!`)
}

// reset button

// start game
const startGame = () => {
    gameStatus()
    makeBoard()
}

startGame()
