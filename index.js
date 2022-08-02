// let title = "";
// if (typeof document !== "undefined") {
//   title = document.title;
// }
// console.log(title);

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCounter = 0
let guestCounter = 0


function clearGame() {
    
    // console.log(homeScore)
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCounter = 0
    guestCounter = 0
    
}

function homeAdd1() {
    homeCounter += 1
    homeScore.innerText = homeCounter
}

function homeAdd2() {
    homeCounter += 2
    homeScore.innerText = homeCounter
}

function homeAdd3() {
    homeCounter += 3
    homeScore.innerText = homeCounter
}

function guestAdd1() {
    guestCounter += 1
    guestScore.innerText = guestCounter
}

function guestAdd2() {
    guestCounter += 2
    guestScore.innerText = guestCounter
}

function guestAdd3() {
    guestCounter += 3
    guestScore.innerText = guestCounter
}