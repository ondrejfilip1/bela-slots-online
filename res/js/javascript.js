var icons = new Array("res/img/diamant.png", "res/img/tresen.png", "res/img/bar.png", "res/img/dolar.png", "res/img/sedmicka.png", "res/img/hrozny.png", "res/img/listek.png");

const counter = document.getElementById("lovaky");
const spinace = document.getElementById("spin");
const slot1 = document.getElementById("1-slot");
const slot2 = document.getElementById("2-slot");
const slot3 = document.getElementById("3-slot");
const restart = document.getElementById("restart");
var sound = new Audio('res/sound/bigwin.mp3');

let lovaky = 1000;
let decreaseLove = 100;

spinace.onclick = () => {
    lovaky -= decreaseLove;
    counter.innerHTML = "Love: " + lovaky;
    var randomNum = Math.floor(Math.random() * icons.length);
    slot1.src = icons[randomNum];
    var randomNum2 = Math.floor(Math.random() * icons.length);
    slot2.src = icons[randomNum2];
    var randomNum3 = Math.floor(Math.random() * icons.length);
    slot3.src = icons[randomNum3];

    if (
        slot1.src.endsWith("res/img/tresen.png") &&
        slot2.src.endsWith("res/img/tresen.png") &&
        slot3.src.endsWith("res/img/tresen.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 3000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/hrozny.png") &&
        slot2.src.endsWith("res/img/hrozny.png") &&
        slot3.src.endsWith("res/img/hrozny.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 3000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/listek.png") &&
        slot2.src.endsWith("res/img/listek.png") &&
        slot3.src.endsWith("res/img/listek.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 5000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/sedmicka.png") &&
        slot2.src.endsWith("res/img/sedmicka.png") &&
        slot3.src.endsWith("res/img/sedmicka.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 4000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/diamant.png") &&
        slot2.src.endsWith("res/img/diamant.png") &&
        slot3.src.endsWith("res/img/diamant.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 4000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/bar.png") &&
        slot2.src.endsWith("res/img/bar.png") &&
        slot3.src.endsWith("res/img/bar.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 2000;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/dolar.png") &&
        slot2.src.endsWith("res/img/dolar.png") &&
        slot3.src.endsWith("res/img/dolar.png")) {
        bigWin();
        animSlot(slot1);
        animSlot(slot2);
        animSlot(slot3);
        lovaky += 2000;
        counter.innerHTML = "Love: " + lovaky;
    }
    /* Combo winy */
    if (
        slot1.src.endsWith("res/img/diamant.png") &&
        slot3.src.endsWith("res/img/diamant.png") &&
        !slot2.src.endsWith("res/img/diamant.png")) {
        comboWin();
        animSlot(slot1);
        animSlot(slot3);
        lovaky += 200;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/listek.png") &&
        slot3.src.endsWith("res/img/listek.png") &&
        !slot2.src.endsWith("res/img/listek.png")) {
        comboWin();
        animSlot(slot1);
        animSlot(slot3);
        lovaky += 400;
        counter.innerHTML = "Love: " + lovaky;
    }
    if (
        slot1.src.endsWith("res/img/bar.png") &&
        slot3.src.endsWith("res/img/bar.png") &&
        !slot2.src.endsWith("res/img/bar.png")) {
        comboWin();
        animSlot(slot1);
        animSlot(slot3);
        lovaky += 200;
        counter.innerHTML = "Love: " + lovaky;
    }

    /* Check na love musi bejt na konci jinak se to dosere */
    if (lovaky <= 0) {
        spinace.style.pointerEvents = "none";
        spinace.style.filter = "saturate(0)";
        counter.innerText = "exekuce GG";
        restart.style.display = "inline-block";
    }
}

restart.onclick = () => {
    restart.style.display = "none";
    lovaky = 1000;
    counter.innerHTML = "Love: " + lovaky;
    spinace.style.pointerEvents = "all";
    spinace.style.filter = "saturate(1)";
}

function bigWin() {
    sound.play();
    spinace.style.filter = "saturate(1)";
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
    }, 2990);
}

function comboWin() {
    spinace.style.filter = "saturate(1)";
    spinace.style.pointerEvents = "none";
    const comboWinImage = document.createElement("img");
    comboWinImage.src = "res/img/combo.png";
    comboWinImage.id = "combowin";
    comboWinImage.draggable = false;
    document.body.appendChild(comboWinImage);
    setTimeout(function () {
        comboWinImage.parentNode.removeChild(comboWinImage);
        if (lovaky > 0) {
            spinace.style.pointerEvents = "all";
        }
    }, 990);
}

function animSlot(slot) {
    if (slot === slot1) {
        slot1.style.transform = "scale(1.35)";
        setTimeout(function () {
            slot1.style.transform = "scale(1)";
        }, 900);
    } else if (slot === slot2) {
        slot2.style.transform = "scale(1.35)";
        setTimeout(function () {
            slot2.style.transform = "scale(1)";
        }, 900);
    } else if (slot === slot3) {
        slot3.style.transform = "scale(1.35)";
        setTimeout(function () {
            slot3.style.transform = "scale(1)";
        }, 900);
    } else {
        console.log("zadnej takovej slot neni");
    }
}
