"use strict";
let speed = 250;
let animationTimer = null;
let animation = "";
let animationFrames = "";
let frame = 0;

let frameAnimation = function () {
    document.getElementById("text-area").value = animationFrames[frame];
    if (frame == animationFrames.length - 1) {
        frame = 0;
    } else {
        frame++;
    }
    clearInterval(animationTimer);
    animate();
}

let animate = function () {
    animationTimer = setInterval(frameAnimation, speed);
}

let start = function () {
    frame = 0;
    if (document.getElementById("start").disabled == false) {
        document.getElementById("start").disabled = true;
        if (document.getElementById("stop").disabled == true) {
            document.getElementById("stop").disabled = false;
        }
        animationFrames = animation.split("=====\n");
        animate();
    }
}
let stop = function () {
    if (document.getElementById("stop").disabled == false) {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        clearInterval(animationTimer);
        document.getElementById("text-area").value = "";
    }
}
let changeAnimation = function () {
    stop();
    let animationSelected = document.getElementById("animation").value;
    animation = ANIMATIONS[animationSelected];
    document.getElementById("text-area").value = "";
}
let fontsize = function () {
    let textarea = document.getElementById("text-area");
    let fontsize = document.getElementById("fontsize").value;
    textarea.style.fontSize = fontsize;
}
let turbo = function () {
    let turbo = document.getElementById("turbo");
    if (turbo.checked) {
        speed = 50;
    } else {
        speed = 250;
    }
}

function main() {
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("animation").onchange = changeAnimation;
    document.getElementById("fontsize").onchange = fontsize;
    document.getElementById("turbo").onchange = turbo;
}

window.onload = main;