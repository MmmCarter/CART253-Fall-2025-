/**
 * DELAY MODE
 * This file contains the code to run *only* the delay mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let delayBuffer = []; //array to hold past positions
let delayAmount = 25; //frames

//frog that follows mouse immediately
let realFrogX = 300;
let realFrogY = 300;

//frog that follows mouse with delay
let delayedFrogX = 300;
let delayedFrogY = 300;

let trail = []; //stores past delayed frog positions
let trailMax = 50; //how long the trail is

/**
 * Setup
 */
function delaySetup() {
    delayBuffer = []; //reset buffer
    trail = []; //reset trail
}

function delayDraw() {
    background(30, 50, 80);

    // real frog follows mouse immediately
    realFrogX = mouseX;
    realFrogY = mouseY;

    // push current mouse into buffer
    delayBuffer.push({ x: realFrogX, y: realFrogY });

    //when buffer is long enough, update the frog's position using the oldest position
    if (delayBuffer.length > delayAmount) {
        let oldPos = delayBuffer.shift();
        delayedFrogX = oldPos.x;
        delayedFrogY = oldPos.y;

        //save delayed frog position for trail
        trail.push({ x: delayedFrogX, y: delayedFrogY });

        if (trail.length > trailMax) {
            trail.shift();
        }
    }

    // draw trail
    noFill();
    stroke(120, 200, 255, 160);
    strokeWeight(4);
    beginShape();
    for (let i = 0; i < trail.length; i++) {
        vertex(trail[i].x, trail[i].y);
    }
    endShape();

    // draw frogs
    drawFrog(realFrogX, realFrogY, color(0, 255, 180));
    drawFrog(delayedFrogX, delayedFrogY, color(255, 200, 0));
}

function delayKeyPressed() { }
function delayMousePressed() { }

// draw the frog
function drawFrog(x, y, col) {
    push();
    translate(x, y);
    fill(col);
    noStroke();
    ellipse(0, 0, 40, 30);
    fill(255);
    ellipse(-10, -10, 15, 20);
    ellipse(10, -10, 15, 20);
    fill(0);
    ellipse(-10, -10, 5, 5);
    ellipse(10, -10, 5, 5);
    pop();
}