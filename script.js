let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");
let stopButtonEl = document.getElementById("stopButton");
let readyButtonEl = document.getElementById("readyButton");
let goButtonEl = document.getElementById("goButton");

function turnOnRed() {
    stopLightEl.style.backgroundColor = "Red";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
    stopButtonEl.style.backgroundColor ="Red";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    goButtonEl.style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "Yellow";
    goLightEl.style.backgroundColor = "#4b5069";
    stopButtonEl.style.backgroundColor ="#1f1d41";
    readyButtonEl.style.backgroundColor = "Yellow";
    goButtonEl.style.backgroundColor = "#1f1d41";
}

function turnOnGreen() {
    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "Green";
    stopButtonEl.style.backgroundColor ="1f1d41";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    goButtonEl.style.backgroundColor = "Green";
}
