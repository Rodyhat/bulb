let switchOn = document.getElementById("on")

let onBulb = document.getElementById("yellow-bulb")
let offBulb = document.getElementById("white-bulb")
switchOn.addEventListener("click", onBtn )

function onBtn() {
    onBulb.style.display = "block"
    offBulb.style.display = "none"
}


let switchOff = document.getElementById("off")
switchOff.addEventListener("click" , offBtn)

function offBtn() {
    onBulb.style.display = "none"
    offBulb.style.display = "block"
}

let whiteMode = document.getElementById("white-circle")
let blackMode = document.getElementById("black-circle")
let backBody = document.getElementById("body")

whiteMode.addEventListener("click", whiteModeBtn)

function whiteModeBtn() {
    whiteMode.style.display = "none"
    blackMode.style.display = "block"
    backBody.style.backgroundColor = "black"
    onBulb.style.display = "block"
    offBulb.style.display = "none"
}

blackMode.addEventListener("click", blackModeBtn)

function blackModeBtn() {
    blackMode.style.display = "none"
    whiteMode.style.display = "block"
    offBulb.style.display = "block"
    onBulb.style.display = "none"
    backBody.style.backgroundColor = "white"
}

