"use strict";
window.addEventListener("load", function () {
    var sound1 = new Audio("assets/A.mp3");
    var sound2 = new Audio("assets/C.mp3");
    var sound3 = new Audio("assets/F.mp3");
    var sound4 = new Audio("assets/G.mp3");
    var sound5 = new Audio("assets/hihat.mp3");
    var sound6 = new Audio("assets/kick.mp3");
    var sound7 = new Audio("assets/laugh-1.mp3");
    var sound8 = new Audio("assets/laugh-2.mp3");
    var sound9 = new Audio("assets/snare.mp3");
    var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    // tslint:disable-next-line: typedef
    function playSample(sound) {
        sound.play();
    }
    document.querySelector("#button1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(sounds[8]); });
    //Teil2
    var beat = [sound6, sound9, sound5];
    function playBeat1() {
        beat[0].play();
    }
    function playBeat2() {
        beat[1].play();
    }
    function playBeat3() {
        beat[2].play();
    }
    function playBeat() {
        setTimeout(function () { playBeat1(); }, 1);
        setTimeout(function () { playBeat2(); }, 500);
        setTimeout(function () { playBeat3(); }, 1000);
    }
    document.querySelector("#play").addEventListener("click", playBeat);
});
//# sourceMappingURL=script.js.map