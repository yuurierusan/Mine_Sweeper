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

// be able to click board tiles

// be able to add flags to tiles on click

// populate board with mines
const minePosition = []
// populate numbers in correspondence to mines

// check for win/lose

// reset button

// start game
const startGame = () => {
    document.querySelector('#mines').innerHTML = numberOfMines
    makeBoard()
}

startGame()
