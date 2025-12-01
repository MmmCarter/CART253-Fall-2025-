/**
 * SPLIT PERCEPTION MODE
 * This file contains the code to run *only* the split perception mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let mic;
let splitX = 300;
let splitY = 300;
let frogColor = [100, 200, 100];

function splitSetup() {
    mic = new p5.AudioIn();
    mic.start();
}

function splitDraw() {
    background(10);

    // X follows mouse
    splitX = mouseX;

    // Y follows mic volume
    let vol = mic.getLevel();
    spiltY = map(vol, 0, 0.2, height * 0.7, height * 0.3);

    // Color follows key (optional)
    fill(frogColor);

    drawFrog(splitX, splitY, frogColor);
}

function splitKeyPressed(event) {
    if (event.key === "r") frogColor = [255, 80, 80];
    if (event.key === "g") frogColor = [80, 255, 80];
    if (event.key === "b") frogColor = [80, 80, 255];
}

function splitMousePressed() { }