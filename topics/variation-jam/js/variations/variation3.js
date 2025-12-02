/**
 * ANTI-CONTROL MODE
 * This file contains the code to run *only* the anti control mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let antiX = 300;
let antiY = 300;
let vx = 0;
let vy = 0;

function antiSetup() {
    antiX = 300;
    antiY = 300;
    vx = 0;
    vy = 0;
}

function antiDraw() {
    background(60, 20, 20);

    // Move away from mouse
    let dx = antiX - mouseX;
    let dy = antiY - mouseY;

    let distSq = dx * dx + dy * dy;
    let force = 5 / max(distSq, 40); // stronger when mouse is close

    vx += dx * force;
    vy += dy * force;

    // Add Perlin noise wandering
    vx += (noise(frameCount * 0.01) - 0.5) * 0.5;
    vy += (noise(frameCount * 0.015) - 0.5) * 0.5;

    antiX += vx;
    antiY += vy;

    // Slow down
    vx *= 0.9;
    vy *= 0.9;

    drawAntiFrog(antiX, antiY);
}

function antiKeyPressed() { }
function antiMousePressed() { }

/**
 * Local frog drawing function for Anti-Control Mode
 */
function drawAntiFrog(x, y) {
    push();
    translate(x, y);
    fill(180, 50, 50);
    ellipse(0, 0, 42, 30);       // body
    ellipse(-10, -10, 14, 18);   // eye L
    ellipse(10, -10, 14, 18);    // eye R
    pop();
}