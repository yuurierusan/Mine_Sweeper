// variables
const ejectBtn = document.querySelector('.material-symbols-sharp')

// functions
const homePage = (e) => {
    location.replace('./home.html')
}

// event listeners
ejectBtn.addEventListener('click', homePage)
