let pointsEl = document.getElementById("points-el");
let gpointsEl = document.getElementById("gpoints-el");
let hScore = 0
let gScore = 0

function add1H() {
    hScore = hScore + 1;
    pointsEl.innerHTML = hScore
}

function add2H() {
    hScore = hScore + 2;
    pointsEl.innerHTML = hScore
}

function add3H() {
    hScore = hScore + 3;
    pointsEl.innerHTML = hScore
}

function add1G() {
    gScore = gScore + 1;
    gpointsEl.innerHTML = gScore
}

function add2G() {
    gScore = gScore + 2;
    gpointsEl.innerHTML = gScore
}

function add3G() {
    gScore = gScore + 3;
    gpointsEl.innerHTML = gScore
}

function reset() {
    hScore = 0
    gScore = 0
    gpointsEl.innerHTML = gScore
    pointsEl.innerHTML = hScore

}
