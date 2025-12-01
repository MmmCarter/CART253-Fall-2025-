/**
 * DELAY MODE
 * This file contains the code to run *only* the delay mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let delayBuffer = [];
let delayAmount = 30; //frames
let frogX = 300;
let frogY = 300;

function delaySetup() {
    delayBuffer = [];
}

function delayDraw() {
    background(30, 50, 80);

    // push current mouse into buffer
    delayBuffer.push({ x: mouseX, y: mouseY });

    //limit buffer
    if (delayBuffer.length > delayAmount) {
        let oldPos = delayBuffer.shift();
        frogX = oldPos.x;
        frogY = oldPos.y;
    }

    // draw frog at delayed position
    drawDelayFrog(frogX, frogY);
}

function delayKeyPressed() { }
function delayMousePressed() { }

// draw the frog
function drawDelayFrog(x, y) {
    push();
    translate(x, y);
    fill(0, 230, 120);
    ellipse(0, 0, 40, 30);
    ellipse(-10, -10, 15, 20);
    ellipse(10, -10, 10, 20);
    pop();
}