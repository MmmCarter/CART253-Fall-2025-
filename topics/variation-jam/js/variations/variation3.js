/**
 * ANTI-CONTROL MODE
 * This file contains the code to run *only* the anti control mode variation part of the program.
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let antiX = 300;
let antiY = 300;

//velocity
let vx = 0;
let vy = 0;

//how strongly the frog avoids control
let repulsionForce = 0.4;
let maxSpeed = 6;

//protest text particles
let protestWords = [
    "CAN'T CONTROL ME",
    "NO TRACKING",
    "RESIST",
    "ANTI SURVEILLANCE",
    "LET ME GO",
    "DON'T FOLLOW",
    "FROG FREEDOM"
]

let protestParticles = [];

function antiSetup() {
    antiX = width / 2;
    antiY = height / 2;
    vx = 0;
    vy = 0;

    protestParticles = [];

    noStroke();
}

function antiDraw() {
    background(10, 15, 20, 240);

    //compute repulsion from mouse
    let dx = antiX - mouseX;
    let dy = antiY - mouseY;
    let distToMouse = sqrt(dx * dx + dy * dy) + 0.0001;

    //stronger push when mouse is closer
    let push = repulsionForce * (200 / distToMouse);

    vx += (dx / distToMouse) * push;
    vy += (dy / distToMouse) * push;

    //clamp speed
    let speed = sqrt(vx * vx + vy * vy);
    if (speed > maxSpeed) {
        vx = (vx / speed) * maxSpeed;
        vy = (vy / speed) * maxSpeed;
    }

    //move frog
    antiX += vx;
    antiY += vy;

    //keep frog on screen
    antiX = constrain(antiX, 20, width - 20);
    antiY = constrain(antiY, 20, height - 20);

    //draw frog
    drawAntiFrog(antiX, antiY);

    //spawn protest text particles
    if (frameCount % 10 === 0) {
        spawnProtestText();
    }

    updateProtestText();

    //screen shake when "oppressed"
    if (distToMouse < 80) {
        applyScreenShake();
    }
}

/**
 * Protest Text Particle System
 */
function spawnProtestText() {
    let txt = random(protestWords);

    protestParticles.push({
        x: random(width),
        y: height + 20,
        vy: random(-1.5, -3),
        alpha: 255,
        msg: txt,
        size: random(16, 28)
    });
}

function updateProtestText() {
    for (let p of protestParticles) {
        p.y += p.vy;
        p.alpha -= 2;

        push();
        fill(255, 50, 50, p.alpha);
        textAlign(CENTER);
        textSize(p.size);
        text(p.msg, p.x, p.y);
        pop();
    }

    // remove dead particles
    protestParticles = protestParticles.filter(p => p.alpha > 0);
}

/**
 * screen shake effect
 */
function applyScreenShake() {
    translate(random(-3, 3), random(-3, 3));
}

function antiKeyPressed() { }
function antiMousePressed() { }

/**
 * Local frog drawing function for Anti-Control Mode
 */
function drawAntiFrog(x, y) {
    push();
    translate(x, y);
    fill(0, 255, 80);
    ellipse(0, 0, 40, 30);
    fill(255);
    ellipse(-10, -10, 15, 20);
    ellipse(10, -10, 15, 20);
    fill(0);
    ellipse(-10, -10, 5, 5);
    ellipse(10, -10, 5, 5);
    pop();
}