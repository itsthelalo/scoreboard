let homePts = document.getElementById("home-pts")
let guestPts = document.getElementById("guest-pts")

function addOne() {
    let currentPoints = parseInt(homePts.innerText)
    homePts.innerText = currentPoints + 1
    }
    
function addTwo() {
    let currentPoints = parseInt(homePts.innerText)
    homePts.innerText = currentPoints + 2
    }

function addThree() {
    let currentPoints = parseInt(homePts.innerText)
    homePts.innerText = currentPoints + 3
    }
    
function addOneGuest() {
    let currentPoints = parseInt(guestPts.innerText)
    guestPts.innerText = currentPoints + 1
    }
    
function addTwoGuest() {
    let currentPoints = parseInt(guestPts.innerText)
    guestPts.innerText = currentPoints + 2
    }

function addThreeGuest() {
    let currentPoints = parseInt(guestPts.innerText)
    guestPts.innerText = currentPoints + 3
    }
    
function resetScr() {
    homePts.innerText = 0
    guestPts.innerText = 0
}