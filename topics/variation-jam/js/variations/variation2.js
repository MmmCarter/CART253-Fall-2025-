/**
 * SPLIT PERCEPTION MODE
 * This file contains the code to run *only* the split perception mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let mic;
let splitX = 300;
let splitY = 300;
let splitFrogColor = [100, 200, 100];

function splitSetup() {
    mic = new p5.AudioIn();
    mic.start(); // start the microphone
}

function splitDraw() {
    background(10);

    // X follows mouse
    splitX = mouseX;

    // Y follows mic volume
    let vol = mic.getLevel();
    splitY = map(vol, 0, 0.2, height * 0.7, height * 0.3);

    drawSplitFrog(splitX, splitY, splitFrogColor);
}

function splitKeyPressed() {
    if (key === "r" || key === "R") frogColor = [255, 80, 80];
    if (key === "g" || key === "G") frogColor = [80, 255, 80];
    if (key === "b" || key === "B") frogColor = [80, 80, 255];
}

function splitMousePressed() { }

// draw the frog
function drawSplitFrog(x, y, col) {
    push();
    translate(x, y);
    fill(col);
    ellipse(0, 0, 40, 30);
    ellipse(-10, -10, 15, 20);
    ellipse(10, -10, 10, 20);
    pop();
}