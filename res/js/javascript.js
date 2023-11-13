var icons = new Array("res/img/diamant.png", "res/img/tresen.png", "res/img/bar.png", "res/img/dolar.png", "res/img/sedmicka.png");

const counter = document.getElementById("lovaky");
const spinace = document.getElementById("spin");
const slot1 = document.getElementById("1-slot");
const slot2 = document.getElementById("2-slot");
const slot3 = document.getElementById("3-slot");

let lovaky = 1000;
let decreaseLove = 100;
let bigWinPricitani = 4000;

spinace.onclick = () => {
    lovaky -= decreaseLove;
    counter.innerHTML = "Love: " + lovaky;
    var randomNum = Math.floor(Math.random() * icons.length);
    slot1.src = icons[randomNum];
    var randomNum2 = Math.floor(Math.random() * icons.length);
    slot2.src = icons[randomNum2];
    var randomNum3 = Math.floor(Math.random() * icons.length);
    slot3.src = icons[randomNum3];
    if (lovaky <= 0) {
        spinace.style.pointerEvents = "none";
        spinace.style.filter = "saturate(0)";
        counter.innerText = "exekuce GG";
    }

    if (
        slot1.src.endsWith("res/img/tresen.png") &&
        slot2.src.endsWith("res/img/tresen.png") &&
        slot3.src.endsWith("res/img/tresen.png")) {
        bigWin();
    }
    if (
        slot1.src.endsWith("res/img/sedmicka.png") &&
        slot2.src.endsWith("res/img/sedmicka.png") &&
        slot3.src.endsWith("res/img/sedmicka.png")) {
        bigWin();
    }
    if (
        slot1.src.endsWith("res/img/diamant.png") &&
        slot2.src.endsWith("res/img/diamant.png") &&
        slot3.src.endsWith("res/img/diamant.png")) {
        bigWin();
    }
    if (
        slot1.src.endsWith("res/img/bar.png") &&
        slot2.src.endsWith("res/img/bar.png") &&
        slot3.src.endsWith("res/img/bar.png")) {
        bigWin();
    }
    if (
        slot1.src.endsWith("res/img/dolar.png") &&
        slot2.src.endsWith("res/img/dolar.png") &&
        slot3.src.endsWith("res/img/dolar.png")) {
        bigWin();
    }
}

function bigWin() {
    lovaky += bigWinPricitani;
    spinace.style.filter = "saturate(1)";
    counter.innerHTML = "Love: " + lovaky;
    spinace.style.pointerEvents = "none";
    const bigWinImage = document.createElement("img");
    bigWinImage.src = "res/img/bigwin.png";
    bigWinImage.id = "bigwin";
    bigWinImage.draggable = false;
    document.body.appendChild(bigWinImage);
    setTimeout(function () {
        bigWinImage.parentNode.removeChild(bigWinImage);
        if (lovaky > 0) {
            spinace.style.pointerEvents = "all";
        }
    }, 2995);
}