// game logic

//make a board
const board = []
const rows = 10
const columns = 10
const makeBoard = () => {
    for (let x = 0; x < rows; x++) {
        let row = []
        for (let y = 0; y < columns; y++) {
            let cell = document.createElement('div')
            cell.id = x.toString() + '-' + y.toString()
            document.querySelector('.grid').append(cell)
            row.push(cell)
        }
        board.push(row)
    }
    console.log(board)
}

// status
const numberOfMines = 10
const mineStatus = () => {
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

// reset button

// start game
const startGame = () => {
    mineStatus()
    makeBoard()
}

startGame()
