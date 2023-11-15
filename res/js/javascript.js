var icons = new Array("res/img/diamant.png", "res/img/tresen.png", "res/img/bar.png", "res/img/dolar.png", "res/img/sedmicka.png", "res/img/hrozny.png", "res/img/listek.png");
var soundBigWin = new Audio('res/sound/bigwin.mp3');
var soundComboWin = new Audio('res/sound/combowin.mp3');

const counter = document.getElementById("lovaky");
const spinace = document.getElementById("spin");
const slot1 = document.getElementById("1-slot");
const slot2 = document.getElementById("2-slot");
const slot3 = document.getElementById("3-slot");
const restart = document.getElementById("restart");
const exekuceCounter = document.getElementById("exekuceCounter");
const lineBet = document.getElementById("lineBet");
const minusBet = document.getElementById("minusBet");
const plusBet = document.getElementById("plusBet");

let multiplierSazka = parseFloat(lineBet.innerHTML);

let lovaky = 1000;
let decreaseLove = 100 * multiplierSazka;
let pocetExekuci = 0;

spinace.onclick = () => {
    decreaseLove = 100 * multiplierSazka;
    if ((lovaky - decreaseLove) < -1) {
        alert("Na to nemas penize");
    } else {
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
            lovaky += 3000 * multiplierSazka;
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
            lovaky += 3000 * multiplierSazka;
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
            lovaky += 5000 * multiplierSazka;
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
            lovaky += 4000 * multiplierSazka;
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
            lovaky += 4000 * multiplierSazka;
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
            lovaky += 2000 * multiplierSazka;
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
            lovaky += 2000 * multiplierSazka;
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
            lovaky += 300 * multiplierSazka;
            counter.innerHTML = "Love: " + lovaky;
        }
        if (
            slot1.src.endsWith("res/img/listek.png") &&
            slot3.src.endsWith("res/img/listek.png") &&
            !slot2.src.endsWith("res/img/listek.png")) {
            comboWin();
            animSlot(slot1);
            animSlot(slot3);
            lovaky += 400 * multiplierSazka;
            counter.innerHTML = "Love: " + lovaky;
        }
        if (
            slot1.src.endsWith("res/img/bar.png") &&
            slot3.src.endsWith("res/img/bar.png") &&
            !slot2.src.endsWith("res/img/bar.png")) {
            comboWin();
            animSlot(slot1);
            animSlot(slot3);
            lovaky += 300 * multiplierSazka;
            counter.innerHTML = "Love: " + lovaky;
        }
    
        /* Check na love musi bejt na konci jinak se to dosere */
        if (lovaky <= 0) {
            spinace.style.pointerEvents = "none";
            spinace.style.filter = "saturate(0)";
            counter.innerText = "exekuce GG";
            restart.style.display = "inline-block";
            pocetExekuci++;
            exekuceCounter.innerText = "Exekuce: " + pocetExekuci;
        }
    }
}

restart.onclick = () => {
    restart.style.display = "none";
    lovaky = 1000;
    counter.innerHTML = "Love: " + lovaky;
    spinace.style.pointerEvents = "all";
    spinace.style.filter = "saturate(1)";
}

minusBet.onclick = () => {
    if (lineBet.innerText == 1) {
        lineBet.innerText = 0.5;
        minusBet.style.filter = "saturate(0)";
        minusBet.style.pointerEvents = "none";
        plusBet.style.filter = "saturate(1)";
        plusBet.style.pointerEvents = "all";
        multiplierSazka = parseFloat(lineBet.innerHTML);
    } else if (lineBet.innerText == 2) {
        lineBet.innerText = 1;
        minusBet.style.filter = "saturate(1)";
        minusBet.style.pointerEvents = "all";
        plusBet.style.filter = "saturate(1)";
        plusBet.style.pointerEvents = "all";
        multiplierSazka = parseFloat(lineBet.innerHTML);
    }
}

plusBet.onclick = () => {
    if (lineBet.innerText == 1) {
        lineBet.innerText = 2;
        plusBet.style.filter = "saturate(0)";
        plusBet.style.pointerEvents = "none";
        minusBet.style.filter = "saturate(1)";
        minusBet.style.pointerEvents = "all";
        multiplierSazka = parseFloat(lineBet.innerHTML);
    } else if (lineBet.innerText == 0.5) {
        lineBet.innerText = 1;
        minusBet.style.filter = "saturate(1)";
        minusBet.style.pointerEvents = "all";
        plusBet.style.filter = "saturate(1)";
        plusBet.style.pointerEvents = "all";
        multiplierSazka = parseFloat(lineBet.innerHTML);
    }
}

function bigWin() {
    soundBigWin.currentTime = 0;
    soundBigWin.play();
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
    soundComboWin.currentTime = 0;
    soundComboWin.volume = 0.4;
    soundComboWin.play();
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