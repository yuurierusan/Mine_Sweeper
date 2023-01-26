// variables
const statusText = document.querySelector('.status')
const grid = document.querySelector('.grid')
let randomIdx = {}
let randomArr = []
const board = []
let rows = []
let gameRunning = false
const numberOfMines = 10
let width = 10
let flagTotal = 0

// make a board with random mines
const makeBoard = () => {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            // create div
            const cell = document.createElement('div')
            // be able to click board cells
            cell.addEventListener('click', click)
            // be able to add flags to cells on click
            cell.addEventListener('contextmenu', contextCell)
            grid.append(cell)
        }
    }

    randomizeClasses()
    addToBoard()
    // stack overflow code for getting total & adding data point
    for (let i = 0; i < board.length; i++) {
        let total = 0
        const isLeftEdge = i % width === 0
        const isRightEdge = i % width === width - 1

        if (board[i].classList.contains('safe')) {
            if (i > 0 && !isLeftEdge && board[i - 1].classList.contains('mine'))
                total++
            if (
                i > 9 &&
                !isRightEdge &&
                board[i + 1 - width].classList.contains('mine')
            )
                total++
            if (i > 10 && board[i - width].classList.contains('mine')) total++
            if (
                i > 11 &&
                !isLeftEdge &&
                board[i - 1 - width].classList.contains('mine')
            )
                total++
            if (
                i < 98 &&
                !isRightEdge &&
                board[i + 1].classList.contains('mine')
            )
                total++
            if (
                i < 90 &&
                !isLeftEdge &&
                board[i - 1 + width].classList.contains('mine')
            )
                total++
            if (
                i < 88 &&
                !isRightEdge &&
                board[i + 1 + width].classList.contains('mine')
            )
                total++
            if (i < 89 && board[i + width].classList.contains('mine')) total++
            board[i].setAttribute('data', total)
        }
    }
}
// depth first search
const depthFirstSearch = (e) => {
    let currentId = e.id
    if (e.classList.contains('checked') || e.classList.contains('flag')) return
    if (e.classList.contains('mine')) {
        gameOver(e)
    } else {
        let total = e.getAttribute('data')
        if (total != 0) {
            e.classList.add('checked')
            if (total == 1) e.classList.add('one')
            if (total == 2) e.classList.add('two')
            if (total == 3) e.classList.add('three')
            if (total == 4) e.classList.add('four')
            e.innerHTML = total
            checkWin()
            return
        }
        checkBoard(currentId)
    }
    e.classList.add('checked')
    checkWin()
}
// left click functions
const click = (e, string) => {
    if (e.target == undefined) return depthFirstSearch(e)
    let currentId = e.target.id
    if (
        e.target.classList.contains('checked') ||
        e.target.classList.contains('flag')
    )
        return
    if (e.target.classList.contains('mine')) {
        gameOver(e)
    } else {
        let total = e.target.getAttribute('data')
        if (total != 0) {
            e.target.classList.add('checked')
            if (total == 1) e.target.classList.add('one')
            if (total == 2) e.target.classList.add('two')
            if (total == 3) e.target.classList.add('three')
            if (total == 4) e.target.classList.add('four')
            e.target.innerHTML = total
            checkWin()
            return
        }
        checkBoard(currentId)
    }
    e.target.classList.add('checked')
    checkWin()
}
// right click functions
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

const addToBoard = () => {
    for (let i = 0; i < 100; i++) {
        grid.children[i].id = i
        board.push(grid.children[i])
    }
}
// reveal cell & numbers of mine near it
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
        flagTotal--
        checkWin()
        return e.target.classList.remove('flag')
    }
    if (gameRunning) {
        flagTotal++
        checkWin()
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

// depth first search function
const checkBoard = (currentId) => {
    const isLeftEdge = currentId % width === 0
    const isRightEdge = currentId % width === width - 1
    setTimeout(() => {
        if (currentId > 0 && !isLeftEdge) {
            // const newId = board[parseInt(currentId) - 1].id
            const newId = +currentId - 1
            const newBoard = document.getElementById(newId)
            click(newBoard, 'one')
        }
        if (currentId > 9 && !isRightEdge) {
            // const newId = board[parseInt(currentId) + 1 - width].id
            const newId = +currentId + 1 - width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId > 10) {
            // const newId = board[parseInt(currentId - width)].id
            const newId = +currentId - width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId > 11 && !isLeftEdge) {
            // const newId = board[parseInt(currentId) - 1 - width].id
            const newId = +currentId - 1 - width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId < 98 && !isRightEdge) {
            // const newId = board[parseInt(currentId) + 1].id
            const newId = +currentId + 1
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId < 90 && !isLeftEdge) {
            // const newId = board[parseInt(currentId) - 1 + width].id
            const newId = +currentId - 1 + width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId < 88 && !isRightEdge) {
            // const newId = board[parseInt(currentId) + 1 + width].id
            const newId = +currentId + 1 + width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
        if (currentId < 89) {
            const newId = +currentId + width
            const newBoard = document.getElementById(newId)
            click(newBoard)
        }
    }, 10)
}

// check win
const checkWin = () => {
    let counter = 0
    for (let i = 0; i < grid.children.length; i++) {
        if (grid.children[i].classList.contains('checked')) {
            counter++
        }
    }
    if (flagTotal === 10 && counter === 90) {
        gameRunning = false
        statusText.innerText = `You avoided the mines! You Win!`
        for (let i = 0; i < grid.children.length; i++) {
            if (grid.children[i].classList.contains('mine')) {
                grid.children[i].classList.add('show')
            }
        }
    }
}

// start game
const startGame = () => {
    gameRunning = true
    statusText.innerText = `Mines :${numberOfMines}`
    makeBoard()
}

startGame()
