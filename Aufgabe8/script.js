"use strict";
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () { playSample("assets/A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function () { playSample("assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { playSample("assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { playSample("assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function () { playSample("assets/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { playSample("assets/kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { playSample("assets/laugh-1.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { playSample("assets/laugh-2.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { playSample("assets/snare.mp3"); });
    document.querySelector("#play").addEventListener("click", playToStop);
    document.querySelector("#delete").addEventListener("click", deleteBeat);
    document.querySelector("#micro").addEventListener("click", recordBeat);
});
let beatInterval = undefined;
let beats = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];
let currentlyRecording = false;
function playSample(soundFile) {
    if (currentlyRecording) {
        beats.push(soundFile);
    }
    var sound = new Audio(soundFile);
    sound.play();
}
function recordBeat() {
    if (currentlyRecording) {
        currentlyRecording = false;
    }
    else {
        currentlyRecording = true;
    }
}
function deleteBeat() {
    beats = [];
}
function playToStop() {
    let playIcon = document.querySelector("#play");
    if (playIcon.className == "fas fa-play") {
        playIcon.className = "fas fa-stop";
        playBeat();
    }
    else {
        playIcon.className = "fas fa-play";
        clearInterval(beatInterval);
    }
}
function playBeat() {
    var index = 0;
    beatInterval = setInterval(function () {
        playSample(beats[index]);
        index += 1;
        if (index >= beats.length) {
            index = 0;
        }
    }, 900);
}
//# sourceMappingURL=script.js.map